import Counter from "@/Components/Counter";
import Link from "next/link";

export default function about() {
  return (
    <main>
      <h1>about page</h1>
      <Counter />
      <button>
        <Link href="/">go to home page</Link>
      </button>
    </main>
  );
}
