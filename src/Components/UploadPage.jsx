import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage, db, auth } from "../firebase";
import { collection, addDoc, getDocs, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "../Styles/UploadPage.css";
import "../Styles/Framework.css";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [season, setSeason] = useState("");
  const [features, setFeatures] = useState([""]);
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [league, setLeague] = useState("");
  const [name, setName] = useState("");
  const [kitType, setKitType] = useState("");
  const [Type, setType] = useState("");
  const [continent, setContinent] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newLeague, setNewLeague] = useState("");
  const [newName, setNewName] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [brandsList, setBrandsList] = useState([]);
  const [leaguesList, setLeaguesList] = useState([]);
  const [namesList, setNamesList] = useState([]);
  const [products, setProducts] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    if (!["CLASSIC KITS", "NATIONAL KITS", "REGULAR KITS", "MYSTERY BOX"].includes(kitType)) {
      setType("");
    }
  }, [kitType]);

  // Fetch dropdown options
  useEffect(() => {
    const fetchOptions = async () => {
      const snap = await getDocs(collection(db, "products"));
      const data = snap.docs.map(doc => doc.data());
      setBrandsList([...new Set(data.map(d => d.brand).filter(Boolean))]);
      setLeaguesList([...new Set(data.map(d => d.league).filter(Boolean))]);
      setNamesList([...new Set(data.map(d => d.name).filter(Boolean))]);
    };
    fetchOptions();
  }, []);

  // Load products
  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "products"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };
    load();
  }, []);

  const continents = ["Europe", "South America", "North America", "Africa", "Asia", "Oceania"];
  const countriesByContinent = continent
    ? [...new Set(products.filter(p => p.continent === continent).map(p => p.name))]
    : [];
  const namesFilteredReal = league && league !== "__new"
    ? [...new Set(products.filter(p => p.league === league).map(p => p.name).filter(Boolean))]
    : namesList;

  // Upload images
  const uploadImages = async () => {
    const urls = [];
    for (let file of files) {
      const fileRef = ref(storage, `products/${file.name}_${Date.now()}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      urls.push(downloadURL);
    }
    return urls;
  };

  const handleUpload = async () => {
    if (!auth.currentUser) return alert("Login required");
    if (!title || !season || !brand) return alert("Fill all fields");
    if (kitType === "NATIONAL KITS" && !name) return alert("Please select a country");
    if (kitType !== "NATIONAL KITS" && !league) return alert("Please select a league");
    if (!name && league !== "__new") return alert("Please select a club/country");

    setUploading(true);

    try {
      let imagesUrls = [];

      if (files.length) {
        imagesUrls = await uploadImages();
      }

      if (editingProductId) {
        // Update existing product
        const existingProduct = products.find(p => p.id === editingProductId);
        if (!existingProduct) throw new Error("Product not found");

        const productDocRef = doc(db, "products", editingProductId);
        await updateDoc(productDocRef, {
          title,
          description,
          season,
          price: Number(price),
          features: features.filter(f => f.trim() !== ""),
          brand: brand === "__new" ? newBrand : brand,
          league: league === "__new" ? newLeague : league,
          name: name === "__new" ? newName : name,
          continent: continent || "",
          kitType,
          Type: Type || "",
          images: files.length ? imagesUrls : existingProduct.images,
        });

        setProducts(prev =>
          prev.map(p => p.id === editingProductId
            ? { ...p, title, description, season, brand: brand === "__new" ? newBrand : brand, league: league === "__new" ? newLeague : league, name: name === "__new" ? newName : name, continent: continent || "", kitType, Type: Type || "", images: files.length ? imagesUrls : p.images }
            : p
          )
        );

        alert("Updated ✔");
      } else {
        // Add new product
        const docRef = await addDoc(collection(db, "products"), {
          title,
          description,
          season,
          price: Number(price),
          features: features.filter(f => f.trim() !== ""),
          brand: brand === "__new" ? newBrand : brand,
          league: league === "__new" ? newLeague : league,
          name: name === "__new" ? newName : name,
          continent: continent || "",
          kitType,
          Type: Type || "",
          images: imagesUrls,
          imagesLabels: imagesUrls.map((_, i) => ["Front", "Back", "Side", "Close-up"][i] || `View ${i+1}`),
          dateAdded: serverTimestamp(),
        });

        setProducts(prev => [...prev, { id: docRef.id, title, description, season, brand: brand === "__new" ? newBrand : brand, league: league === "__new" ? newLeague : league, name: name === "__new" ? newName : name, continent: continent || "", kitType, Type: Type || "", images: imagesUrls }]);
        alert("Added ✔");
      }

      // Reset form
      setTitle(""); setDescription(""); setSeason(""); setPrice(""); setFeatures([""]); setBrand(""); 
      setLeague(""); setName(""); setKitType(""); setType(""); setContinent(""); setFiles([]); 
      setNewBrand(""); setNewLeague(""); setNewName(""); setEditingProductId(null);

    } catch (e) {
      console.error(e);
      alert("Error");
    }

    setUploading(false);
  };

  const deleteProductByTitle = async (titleToDelete) => {
    if (!window.confirm("Delete this item?")) return;

    try {
      const snap = await getDocs(collection(db, "products"));
      const productDoc = snap.docs.find(doc => doc.data().title === titleToDelete);
      if (!productDoc) return alert("Product not found");

      await deleteDoc(doc(db, "products", productDoc.id));
      const productData = productDoc.data();
      for (let url of productData.images) {
        const imageRef = ref(storage, url);
        await deleteObject(imageRef).catch(() => {});
      }

      alert("Deleted ✔");
      setProducts(prev => prev.filter(p => p.title !== titleToDelete));
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>{editingProductId ? "Edit Product" : "Add Product"}</h2>

        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Season" value={season} onChange={e => setSeason(e.target.value)} />
        <input type="number" placeholder="Price" value={price}onChange={e => setPrice(e.target.value)} />

        <label>Features:</label>
        {features.map((feature, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
          <input
            type="text"
            placeholder={`Feature ${index + 1}`}
            value={feature}
            onChange={(e) => { const updated = [...features]; updated[index] = e.target.value;
              setFeatures(updated);
            }}
          />
        {features.length > 1 && (
          <button type="button" onClick={() => {
              setFeatures(features.filter((_, i) => i !== index));
            }}>
          ✕
          </button>
        )}
      </div>
    ))}

<button
  type="button"
  onClick={() => setFeatures([...features, ""])}
>
  + Add Feature
</button>



        <label>Kit Type:</label>
        <select value={kitType} onChange={e => setKitType(e.target.value)}>
          <option value="">Select Kit Type</option>
          <option value="SPECIAL KITS">SPECIAL KITS</option>
          <option value="CLASSIC KITS">CLASSIC KITS</option>
          <option value="MYSTERY BOX">MYSTERY BOX</option>
          <option value="WINTER KITS">WINTER KITS</option>
          <option value="REGULAR KITS">REGULAR KITS</option>
          <option value="NATIONAL KITS">NATIONAL KITS</option>
        </select>

        {kitType === "NATIONAL KITS" ? (
          <>
            <label>Continent:</label>
            <select value={continent} onChange={e => { setContinent(e.target.value); setLeague(""); }}>
              <option value="">Select Continent</option>
              {continents.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <label>Country:</label>
            <select value={name} onChange={e => setName(e.target.value)}>
              <option value="">Select Country</option>
              {countriesByContinent.map(country => <option key={country} value={country}>{country}</option>)}
              <option value="__new">+ Add New Country</option>
            </select>
            {name === "__new" && <input type="text" placeholder="New country" value={newName} onChange={e => setNewName(e.target.value)} />}
          </>
        ) : (
          <>
            <label>League:</label>
            <select value={league} onChange={e => { setLeague(e.target.value); setName(""); }}>
              <option value="">Select League</option>
              {leaguesList.map(l => <option key={l} value={l}>{l}</option>)}
              <option value="__new">+ Add New League</option>
            </select>
            {league === "__new" && <input type="text" placeholder="New league" value={newLeague} onChange={e => setNewLeague(e.target.value)} />}

            <label>Club:</label>
            <select value={name} onChange={e => setName(e.target.value)}>
              <option value="">Select Club</option>
              {namesFilteredReal.map(n => <option key={n} value={n}>{n}</option>)}
              <option value="__new">+ Add New Club</option>
            </select>
            {name === "__new" && <input type="text" placeholder="New club" value={newName} onChange={e => setNewName(e.target.value)} />}
          </>
        )}

        <label>Brand:</label>
        <select value={brand} onChange={e => { setBrand(e.target.value); setNewBrand(""); }}>
          <option value="">Select Brand</option>
          {brandsList.map(b => <option key={b} value={b}>{b}</option>)}
          <option value="__new">+ Add New Brand</option>
        </select>
        {brand === "__new" && <input type="text" placeholder="New brand" value={newBrand} onChange={e => setNewBrand(e.target.value)} />}

        {["CLASSIC KITS", "REGULAR KITS", "NATIONAL KITS", "MYSTERY BOX"].includes(kitType) && (
          <>
            <label>Type:</label>
            <select value={Type} onChange={e => setType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Special">Special</option>
              <option value="Training">Training</option>
            </select>
          </>
        )}

        <input type="file" multiple accept="image/*" onChange={e => setFiles(Array.from(e.target.files))} />

        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading..." : editingProductId ? "Update Product" : "Add Product"}
        </button>

        <button style={{ marginTop: "10px" }} onClick={() => setShowOverlay(true)}>Show Products</button>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setShowOverlay(false)}>X</button>
            <h3>All Products</h3>
            <div className="products-grid">
              {products.map(p => (
                <div key={p.id} className="product-card">
                  <img src={p.images[0]} alt={p.title} />
                  <h4>{p.title}</h4>
                  <p>{p.season}</p>
                  <button onClick={() => deleteProductByTitle(p.title)}>Delete</button>
                  <button onClick={() => {
                    setTitle(p.title); setDescription(p.description); setSeason(p.season);
                    setPrice(p.price); setFeatures(p.features?.length ? p.features : [""]);
                    setBrand(p.brand); setLeague(p.league); setName(p.name);
                    setKitType(p.kitType); setType(p.Type || ""); setContinent(p.continent || "");
                    setFiles([]); setEditingProductId(p.id); setShowOverlay(false);
                  }}>Edit</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPage;