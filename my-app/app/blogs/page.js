import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <div className="mx-auto p-4">
        <h1>Blogs Page</h1>
        <p>This is the blogs page.</p>
        <Link href="/">Go to Home</Link>
      </div>
    </>
  );
}
