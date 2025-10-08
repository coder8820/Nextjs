import Container from "@/components/Container";
import React from "react";

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

const CategoryListing = () => {
  return <div></div>;
};

const ProductListing = () => {
  return <div className="col-span-4"></div>;
};
