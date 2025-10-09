import { getProducts } from "@/styles/Library";

export default function StorePage() {
  return (
    <div>
      <ProductListing />
    </div>
  );
}

const ProductListing = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="col-span-4">
      <h2 className="font-bold text-2xl mb-5 mt-5 uppercase pl-5">Products:</h2>
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
