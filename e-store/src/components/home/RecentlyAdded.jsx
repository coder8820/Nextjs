"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";

const API_URL = "https://fakestoreapi.com/products";

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if (products.length === 0) {
    return (
      <div className="text-gray-100">
        <p>Loading products...</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Recently Added Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-gray-700 font-bold">${product.price}</p>
              {/* Add to cart button */}
              <button className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
