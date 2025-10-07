"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Container from "../Container";
import ProductBox from "./ProductBox";

const API_URL = "https://fakestoreapi.com/products?limit=10";

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data; // ✅ Return fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // ✅ Return empty array on error
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (isMounted) setProducts(data);
      } catch (error) {
        if (isMounted) setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Recently Added Products
        </h2>

        {/* Separated component of ProductBox */}
        <ProductBox products={products} />
      </Container>
    </div>
  );
}
