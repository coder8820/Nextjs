"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
// import ProductBox from "../ProductBox";

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

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Recently Added Products
        </h2>
        {/* <ProductBox products={products} />
         */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {/* Wrapper div with relative positioning and fixed height */}
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-700 font-bold">${product.price}</p>
              <button className="mt-2 w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
