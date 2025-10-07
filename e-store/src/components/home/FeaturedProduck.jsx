import React from "react";
import Image from "next/image";
import Container from "../Container";

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // ensures fresh data every render
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data.slice(8, 20); // limit products (index 8–19)
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback for UI stability
  }
}

export default async function FeaturedProduct() {
  const products = await getProducts();

  if (products.length === 0) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center bg-white shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-center">
                {product.title.split(" ").slice(0, 3).join(" ")}
                {product.title.split(" ").length > 3 ? "..." : ""}
              </h3>

              <p className="text-gray-700 font-bold">${product.price}</p>

              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
