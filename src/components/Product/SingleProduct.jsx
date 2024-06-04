// src/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching product with ID: ${id}`);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        console.log("Fetched product:", json);
        setProduct(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-gray-600 mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-600 mt-10">Error loading product: {error.message}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {product ? (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden mt-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
          
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-10">No product found</p>
      )}
    </div>
  );
};

export default SingleProduct;
