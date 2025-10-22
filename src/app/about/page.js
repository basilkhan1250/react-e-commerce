"use client";

import React from "react";  
const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">    
        <h1 className="text-4xl font-bold mb-4 text-blue-700">About E-Shop</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
            Welcome to E-Shop, your number one source for all things
            [product category]. We're dedicated to providing you the very best
            of [product category], with an emphasis on quality, customer service,
            and affordability.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl text-center mt-4">
            Founded in [year] by [founder's name], E-Shop has come a long way from
            its beginnings in a [starting location, e.g., home office, garage].
            When [founder's name] first started out, [his/her/their] passion for
            [passion related to product category] drove them to start their own
            business.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl text-center mt-4">
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl text-center mt-4">
            Sincerely, <br />
            [Founder's Name], Founder
        </p>
    </div>
    );
};
export default AboutPage;