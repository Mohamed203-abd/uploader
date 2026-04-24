import { useState, useEffect, useMemo } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { storage, db, auth } from "../firebase";
import { useProducts } from "../Hooks/UseProducts";
import { useQueryClient } from "@tanstack/react-query";

import "../Styles/UploadPage.css";
import "../Styles/Framework.css";

function UploadPage() {
  const queryClient = useQueryClient();

  // ================= CACHE =================
  const { data: products = [] } = useProducts();

  // ================= STATES =================
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

  const [showOverlay, setShowOverlay] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ================= EFFECTS =================
  useEffect(() => {
    if (
      !["REGULAR KITS", "NATIONAL KITS", "MYSTERY BOX"].includes(
        kitType
      )
    ) {
      setType("");
    }
  }, [kitType]);

  // ================= DROPDOWNS FROM CACHE =================
  const brandsList = useMemo(
    () =>
      [...new Set(products.map((p) => p.brand).filter(Boolean))].sort(),
    [products]
  );

  const leaguesList = useMemo(
    () =>
      [...new Set(products.map((p) => p.league).filter(Boolean))].sort(),
    [products]
  );

  const namesList = useMemo(
    () =>
      [...new Set(products.map((p) => p.name).filter(Boolean))].sort(),
    [products]
  );

  const continents = [
    "Europe",
    "South America",
    "North America",
    "Africa",
    "Asia",
    "Oceania",
  ];

  const countriesByContinent = useMemo(() => {
    if (!continent) return [];

    return [
      ...new Set(
        products
          .filter((p) => p.continent === continent)
          .map((p) => p.name)
          .filter(Boolean)
      ),
    ];
  }, [products, continent]);

  const namesFilteredReal = useMemo(() => {
    if (!league || league === "__new") return namesList;

    return [
      ...new Set(
        products
          .filter((p) => p.league === league)
          .map((p) => p.name)
          .filter(Boolean)
      ),
    ];
  }, [products, league, namesList]);

  // ================= SEARCH =================
  const filteredProducts = useMemo(() => {
    const q = searchTerm.toLowerCase();

    return products.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.Type?.toLowerCase().includes(q) ||
        String(p.season).includes(q)
    );
  }, [products, searchTerm]);

  // ================= HELPERS =================
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSeason("");
    setFeatures([""]);
    setPrice("");

    setBrand("");
    setLeague("");
    setName("");
    setKitType("");
    setType("");
    setContinent("");

    setNewBrand("");
    setNewLeague("");
    setNewName("");

    setFiles([]);
    setEditingProductId(null);
  };

  const uploadImages = async () => {
    const urls = [];

    for (const file of files) {
      const fileRef = ref(
        storage,
        `products/${Date.now()}_${file.name}`
      );

      await uploadBytes(fileRef, file);

      const url = await getDownloadURL(fileRef);

      urls.push(url);
    }

    return urls;
  };

  const detectClassic = (seasonValue) => {
    const match = seasonValue.match(/^(\d{4})/);

    if (!match) return false;

    const firstYear = Number(match[1]);

    return firstYear < 2015;
  };

  // ================= ADD / UPDATE =================
  const handleUpload = async () => {
    if (!auth.currentUser) return alert("Login required");

    if (!title || !season || !brand)
      return alert("Fill all fields");

    if (kitType === "NATIONAL KITS" && !name)
      return alert("Choose country");

    if (kitType !== "NATIONAL KITS" && !league)
      return alert("Choose league");

    setUploading(true);

    try {
      let imagesUrls = [];

      if (files.length) {
        imagesUrls = await uploadImages();
      }

      const finalBrand =
        brand === "__new" ? newBrand : brand;

      const finalLeague =
        league === "__new" ? newLeague : league;

      const finalName =
        name === "__new" ? newName : name;

      const seasonValue = season.trim();

      const payload = {
        title,
        description,
        season: seasonValue,
        isClassic: detectClassic(seasonValue),
        price: Number(price),
        features: features.filter((f) => f.trim()),
        brand: finalBrand,
        league: finalLeague,
        name: finalName,
        continent: continent || "",
        kitType,
        Type: Type || "",
      };

      if (editingProductId) {
        const oldProduct = products.find(
          (p) => p.id === editingProductId
        );

        await updateDoc(
          doc(db, "products", editingProductId),
          {
            ...payload,
            images:
              imagesUrls.length > 0
                ? imagesUrls
                : oldProduct?.images || [],
          }
        );

        alert("Updated ✔");
      } else {
        await addDoc(collection(db, "products"), {
          ...payload,
          images: imagesUrls,
          imagesLabels: imagesUrls.map(
            (_, i) =>
              ["Front", "Back", "Side", "Close-up"][i] ||
              `View ${i + 1}`
          ),
          dateAdded: serverTimestamp(),
        });

        alert("Added ✔");
      }

      queryClient.invalidateQueries(["products"]);

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Error");
    }

    setUploading(false);
  };

  // ================= DELETE =================
  const deleteProductById = async (item) => {
    if (!window.confirm("Delete this item?")) return;

    try {
      await deleteDoc(doc(db, "products", item.id));

      if (item.images?.length) {
        for (const url of item.images) {
          await deleteObject(ref(storage, url)).catch(() => {});
        }
      }

      queryClient.invalidateQueries(["products"]);

      alert("Deleted ✔");
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  // ================= EDIT =================
  const editItem = (p) => {
    setTitle(p.title || "");
    setDescription(p.description || "");
    setSeason(p.season || "");
    setPrice(p.price || "");
    setFeatures(
      p.features?.length ? p.features : [""]
    );

    setBrand(p.brand || "");
    setLeague(p.league || "");
    setName(p.name || "");
    setKitType(p.kitType || "");
    setType(p.Type || "");
    setContinent(p.continent || "");

    setFiles([]);
    setEditingProductId(p.id);
    setShowOverlay(false);
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>
          {editingProductId
            ? "Edit Product"
            : "Add Product"}
        </h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          placeholder="Season"
          value={season}
          onChange={(e) =>
            setSeason(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        {/* FEATURES */}
        <label>Features</label>

        {features.map((item, index) => (
          <div key={index}>
            <input
              value={item}
              placeholder={`Feature ${index + 1}`}
              onChange={(e) => {
                const arr = [...features];
                arr[index] = e.target.value;
                setFeatures(arr);
              }}
            />

            {features.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setFeatures(
                    features.filter(
                      (_, i) => i !== index
                    )
                  )
                }
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            setFeatures([
              ...features,
              "",
            ])
          }
        >
          + Add Feature
        </button>

        {/* KIT TYPE */}
        <label>Kit Type</label>

        <select
          value={kitType}
          onChange={(e) =>
            setKitType(e.target.value)
          }
        >
          <option value="">
            Select Kit Type
          </option>
          <option value="REGULAR KITS">
            REGULAR KITS
          </option>
          <option value="NATIONAL KITS">
            NATIONAL KITS
          </option>
          <option value="MYSTERY BOX">
            MYSTERY BOX
          </option>
        </select>

        {/* NATIONAL */}
        {kitType === "NATIONAL KITS" ? (
          <>
            <label>Continent</label>

            <select
              value={continent}
              onChange={(e) =>
                setContinent(e.target.value)
              }
            >
              <option value="">
                Select Continent
              </option>

              {continents.map((c) => (
                <option key={c}>
                  {c}
                </option>
              ))}
            </select>

            <label>Country</label>

            <select
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            >
              <option value="">
                Select Country
              </option>

              {countriesByContinent.map(
                (c) => (
                  <option key={c}>
                    {c}
                  </option>
                )
              )}

              <option value="__new">
                + Add New Country
              </option>
            </select>

            {name === "__new" && (
              <input
                placeholder="New Country"
                value={newName}
                onChange={(e) =>
                  setNewName(
                    e.target.value
                  )
                }
              />
            )}
          </>
        ) : (
          <>
            <label>League</label>

            <select
              value={league}
              onChange={(e) => {
                setLeague(
                  e.target.value
                );
                setName("");
              }}
            >
              <option value="">
                Select League
              </option>

              {leaguesList.map((l) => (
                <option key={l}>
                  {l}
                </option>
              ))}

              <option value="__new">
                + Add New League
              </option>
            </select>

            {league === "__new" && (
              <input
                placeholder="New League"
                value={newLeague}
                onChange={(e) =>
                  setNewLeague(
                    e.target.value
                  )
                }
              />
            )}

            <label>Club</label>

            <select
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            >
              <option value="">
                Select Club
              </option>

              {namesFilteredReal.map(
                (n) => (
                  <option key={n}>
                    {n}
                  </option>
                )
              )}

              <option value="__new">
                + Add New Club
              </option>
            </select>

            {name === "__new" && (
              <input
                placeholder="New Club"
                value={newName}
                onChange={(e) =>
                  setNewName(
                    e.target.value
                  )
                }
              />
            )}
          </>
        )}

        {/* BRAND */}
        <label>Brand</label>

        <select
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          <option value="">
            Select Brand
          </option>

          {brandsList.map((b) => (
            <option key={b}>
              {b}
            </option>
          ))}

          <option value="__new">
            + Add New Brand
          </option>
        </select>

        {brand === "__new" && (
          <input
            placeholder="New Brand"
            value={newBrand}
            onChange={(e) =>
              setNewBrand(
                e.target.value
              )
            }
          />
        )}

        {/* TYPE */}
        {[
          "REGULAR KITS",
          "NATIONAL KITS",
          "MYSTERY BOX",
        ].includes(kitType) && (
          <>
            <label>Type</label>

            <select
              value={Type}
              onChange={(e) =>
                setType(
                  e.target.value
                )
              }
            >
              <option value="">
                Select Type
              </option>
              <option>Home</option>
              <option>Away</option>
              <option>Third</option>
              <option>Fourth</option>
              <option>Goalkeeper</option>
              <option>Special</option>
              <option>Winter</option>
              <option>Training</option>
            </select>
          </>
        )}

        {/* FILE */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) =>
            setFiles(
              Array.from(
                e.target.files || []
              )
            )
          }
        />

        <button
          disabled={uploading}
          onClick={handleUpload}
        >
          {uploading
            ? "Saving..."
            : editingProductId
            ? "Update Product"
            : "Add Product"}
        </button>

        <button
          onClick={() =>
            setShowOverlay(true)
          }
        >
          Show Products
        </button>
      </div>

      {/* OVERLAY */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button
              className="close-btn"
              onClick={() =>
                setShowOverlay(false)
              }
            >
              X
            </button>

            <h3>All Products</h3>

            <input
              className="overlay-search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />

            <div className="products-grid">
              {filteredProducts.map(
                (p) => (
                  <div
                    key={p.id}
                    className="product-card"
                  >
                    <img
                      src={
                        p.images?.[0]
                      }
                      alt={p.title}
                    />

                    <h4>
                      {p.title}
                    </h4>

                    <p>
                      {p.season}
                    </p>

                    <button
                      onClick={() =>
                        deleteProductById(
                          p
                        )
                      }
                    >
                      Delete
                    </button>

                    <button
                      onClick={() =>
                        editItem(
                          p
                        )
                      }
                    >
                      Edit
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPage;