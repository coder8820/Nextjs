import React from "react";
import Container from "../Container";

const API_URL = "https://fakestoreapi.com/products?limit=5";

export default function RecentlyAdded() {
  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-4 text-center">
          Recently Added Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {/* Example product cards */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Product 1"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Product 1</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
