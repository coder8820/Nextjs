import Container from "@/components/Container";
import React from "react";
import { getCategories, getProducts } from "@/styles/Library";

export default function StorePage() {
  return (
    <div>
      <Container className={`grid grid-cols-5`}>
        <CategoryListing />
        <ProductListing />
      </Container>
    </div>
  );
}

const CategoryListing = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <div className="col-span-1 border-r-2 pr-5 mt-5">
        <h2 className="font-bold text-2xl mb-5 text-green-700">Categories</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category}
              className="cursor-pointer hover:underline uppercase border-radius: 0.375rem; px-3 py-1 bg-gray-200 bg:hover:bg-gray-400 transition hover:text-pink-500 "
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProductListing = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="col-span-4">
      <h2 className="font-bold text-2xl mb-5 mt-5 ">Products</h2>
      <div className="grid grid-cols-2 grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-3 rounded">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-3"
            />
            <h3 className="font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
