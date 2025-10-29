"use client";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useStore } from "./store";

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




    const categories = [
        products,
        gaming,
        toys,
        sports,
        beauty,
        homeAndKitchen,
        electronics,
        accessories,
        fashion
    ];

    try {
        const categoryNames = Object.keys(categories);
        console.log(categoryNames);

        for (let i = 0; i < categoryNames.length; i++) {
            const categoryName = categoryNames[i];
            console.log(`🔄 Processing category: ${categoryName}`);
            const items = categories[categoryName];
            console.log(items);

            if (!Array.isArray(items) || items.length === 0) {
                console.log(`⚠️ Skipping ${categoryName} (no items found)`);
                continue;
            }

            console.log(`🚀 Uploading ${items.length} items to ${categoryName}...`);

            for (let j = 0; j < items.length; j++) {
                await addDoc(collection(db, categoryName), items[j]);
                console.log(`✅ Added ${categoryName} item ${j + 1}/${items.length}`);
            }

            console.log(`🎯 Finished uploading ${categoryName}`);
        }

        console.log("🎉 All categories uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading products: ", error);
    }
};


export default addProductToDB;
