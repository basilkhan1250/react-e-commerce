"use client";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
// import { useStore } from "../component/store";

const addProductToDB = async () => {
  const {
    products,
    gaming,
    toys,
    sports,
    beauty,
    homeAndKitchen,
    electronics,
    accessories,
    fashion
  } = useStore.getState();

  // Combine all categories into an object
  const categories = {
    products,
    gaming,
    toys,
    sports,
    beauty,
    homeAndKitchen,
    electronics,
    accessories,
    fashion
  };

  try {
    console.log("🚀 Uploading all categories under parent path: products");

    // Convert object into an array of [categoryName, items] pairs
    const categoryEntries = Object.entries(categories);

    // Use Promise.all + map for parallel uploads
    await Promise.all(
      categoryEntries.map(async ([categoryName, items]) => {
        if (!Array.isArray(items) || items.length === 0) {
          console.log(`⚠️ Skipping ${categoryName} (no items found)`);
          return;
        }

        console.log(`📦 Storing ${items.length} items in document: ${categoryName}`);

        // Store each category as a document under "products" collection
        await setDoc(doc(db, "products", categoryName), {
          items,
          updatedAt: new Date().toISOString(),
        });

        console.log(`✅ ${categoryName} uploaded successfully!`);
      })
    );

    console.log("🎉 All categories uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading products: ", error);
  }
};

export default addProductToDB;
