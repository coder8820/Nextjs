import React from "react";
import Container from "../Container";

export default async function FeaturedProduck() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const sliceProduct = data.slice(10, 20);
  console.log(sliceProduct);
  return (
    <div className="p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((sliceProduct) => (
            <div
              key={sliceProduct.id}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={sliceProduct.image}
                alt={sliceProduct.title}
                className="h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {sliceProduct.title}
              </h3>
              <p className="text-gray-700 font-bold">${sliceProduct.price}</p>
            </div>
          ))}
        </div>
      </Container>
      ;
    </div>
  );
}
