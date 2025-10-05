import Image from "next/image";
import "@/styles/productbox.module.css";

export default function ProductBox({ products }) {
  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          {/* Wrapper div with relative positioning and fixed height */}
          <div className="relative w-full h-48 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-700 font-bold">${product.price}</p>
          <button className="mt-2 w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors cursor-pointer">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
