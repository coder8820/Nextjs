import React from "react";
import Container from "../Container";

export default async function FeaturedProduck() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // optional: always fetch fresh data
  });
  const data = await response.json();

  // slice products from 10 to 20
  const slicedProducts = data.slice(8, 20);
  console.log(slicedProducts);

  return (
    <div className="p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {slicedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {product.title.split(" ").slice(0, 3).join(" ")}
              </h3>
              <p className="text-gray-700 font-bold">${product.price}</p>
              {/* add cart button */}
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
