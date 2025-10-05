"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

const API_URL = "https://fakestoreapi.com/products";

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      // console.log(data);
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
        <ProductBox products={products} />
      </Container>
    </div>
  );
}
