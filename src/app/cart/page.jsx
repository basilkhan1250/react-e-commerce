"use client";
import React from "react";
import { useRouter } from "next/navigation";


const CartPage = () => {

    const router = useRouter();

    const goTo = (path) => {
        router.push(path);
    };

    const cart = false

    const arr = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 49.99 },
        { id: 3, name: "Product 3", price: 19.99 },
    ];


    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">Your Shopping Cart</h1>


            {cart === true ? (
                <>
                    <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
                        Your cart is currently empty. Browse our products and add items to your cart to see them here.
                    </p>
                    <button
                        onClick={() => goTo("/products")}
                        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-300"
                    >
                        Continue Shopping
                    </button>
                </>
            ) : (
                <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
                    {arr.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-2"
                        >
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default CartPage;