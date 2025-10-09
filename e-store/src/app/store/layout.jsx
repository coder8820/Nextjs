import Container from "@/components/Container";
import React from "react";
import { getCategories } from "@/styles/Library";

export default function StoreLayout({ children }) {
  return (
    <div>
      <Container className={`grid grid-cols-5`}>
        <CategoryListing />
        {children}
      </Container>
    </div>
  );
}

const CategoryListing = async () => {
  const categories = await getCategories();
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
