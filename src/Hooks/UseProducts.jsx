import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const normalizeSeason = (season) => {
  if (!season) return "";

  const str = String(season).toLowerCase().replace(/\s/g, "");
  const match = str.match(/(\d{2,4})/);
  if (!match) return "";

  let year = Number(match[1]);
  if (year < 100) year += year < 50 ? 2000 : 1900;

  return `${year}/${String(year + 1).slice(-2)}`;
};

const fetchProducts = async () => {
  const snap = await getDocs(collection(db, "products"));

  return snap.docs.map((doc) => {
    const p = doc.data();

    return {
      id: doc.id,
      ...p,
      type: p.Type || "",
      league: p.kitType === "NATIONAL KITS" ? p.continent : p.league,
      club: p.name,
      season: normalizeSeason(p.season),
    };
  });
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
}