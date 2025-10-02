import Link from "next/link";

export default function about() {
  return (
    <main>
      <div>
        <h1>about page</h1>
        <button>
          <Link href="/">go to home page</Link>
        </button>
      </div>
    </main>
  );
}
