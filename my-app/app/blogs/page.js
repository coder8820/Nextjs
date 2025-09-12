import Link from "next/link";

export const metadata = {
  title: "Blogs Page",
  description: "This is the blogs page of our Next.js application.",
};

export default function Blogs() {
  return (
    <>
      <div className="mx-auto p-4">
        <h1>Blogs Page</h1>
        <p>This is the blogs page.</p>
        <h2>Blog 1</h2>
        <h2>Blog 2</h2>
        <h2>Blog 3</h2>
        <h2>Blog 4</h2>
        <Link href="/">Go to Home</Link>
      </div>
    </>
  );
}
