// src/Product.js
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full py-6 text-center text-3xl font-bold">
        Our Products
      </header>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
              <div className="flex justify-between mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Add to cart
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
