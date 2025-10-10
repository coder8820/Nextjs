import Container from "@/components/Container";
import { getCategories } from "@/styles/Library";

export default function StoreLayout({ children }) {
  return (
    <div>
      <Container className="grid grid-cols-5 w-full min-h-screen">
        <CategoryListing />
        <div className="col-span-4 pl-5 m-auto w-full">{children}</div>
      </Container>
    </div>
  );
}

const CategoryListing = async () => {
  const categories = await getCategories();

  return (
    <div className="col-span-1 border-r-2 pr-5 mt-5 bg-red-500">
      <h2 className="font-bold text-2xl mb-5 text-green-700">Categories</h2>
      <ul className="space-y-3 text-gray-700">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer hover:underline uppercase rounded-md px-3 py-1 bg-gray-200 hover:bg-gray-300 transition hover:text-pink-500"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
