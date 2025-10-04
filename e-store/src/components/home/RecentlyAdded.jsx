import React from "react";
import Container from "../Container";

export default function RecentlyAdded() {
  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h2 className="text-3xl font-bold mt-4 mb-4 text-center">
          Recently Added Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Product Card */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="@/public/image.png"
              alt="Product"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
          {/* Repeat Product Cards as needed */}
        </div>
      </Container>
    </div>
  );
}
