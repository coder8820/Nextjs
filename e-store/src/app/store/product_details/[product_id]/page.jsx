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
      <div className="col-span-1 border-r-2 pr-5">
        <h2 className="font-bold text-2xl mb-5">Categories</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category} className="cursor-pointer hover:underline">
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

  return <div className="col-span-4"></div>;
};
