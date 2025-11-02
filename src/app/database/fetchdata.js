"use client";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // 🧩 prevent state updates if unmounted

    const fetchProducts = async () => {
      console.log("🟢 Fetching products from Firestore...");

      try {
        const snapshot = await getDocs(collection(db, "products"));
        console.log(`📦 Documents fetched: ${snapshot.docs.length}`);

        const fetchedData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("📄 Firestore Data:", fetchedData);

        if (isMounted) {
          setCategories(fetchedData);
        }
      } catch (error) {
        console.error("❌ Firestore fetch error:", error.message || error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    // 🧹 cleanup on unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, loading };
};

export default useFetchProducts;
