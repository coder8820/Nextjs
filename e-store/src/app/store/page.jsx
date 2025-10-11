import Container from "@/components/Container";
import { getProducts } from "@/styles/Library";

export default function StorePage() {
  return (
    <div>
      <Container className={`grid grid-cols-5 w-full min-h-screen `}>
        <ProductListing />
      </Container>
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
            <h3 className="font-semibold text-lg">
              {product.title.split(" ").slice(0, 3).join(" ") + "..."}
            </h3>
            <p className="text-gray-600">${product.price}</p>
            {/* add cart btn */}
            <button className=" cursor-pointer mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
