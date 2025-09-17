import Link from "next/link";

export const metadata = {
  title: "Services Page",
  description: "This is the services page of our Next.js application.",
};

export default function Services() {
  return (
    <>
      <div className="mx-auto p-4">
        <h1>All Services</h1>
        <p>This is the services page of our Next.js application.</p>
        <li>
          <Link href="/services/web.dev">Web Development</Link>
        </li>
        <li>
          <Link href="/services/seo">SEO Optimization</Link>
        </li>
        <li>
          <Link href="/services/content">Content Creation</Link>
        </li>
        <br />
        <Link href="/">go home page</Link>
      </div>
    </>
  );
}
