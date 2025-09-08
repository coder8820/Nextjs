import Link from "next/link";

export default async function Blogs({ param, searchParams }) {
  console.log(await param);
  console.log(await searchParams);
  return (
    <>
      <div className="mx-auto p-4">
        <h1>Blogs Page</h1>
        <p>This is the blogs page.</p>
        <h2>Blog 1</h2>
        <h2>Blog 2</h2>
        <h2>Blog 3</h2>
        <Link href="/">Go to Home</Link>
      </div>
    </>
  );
}
