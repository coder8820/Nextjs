import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="mx-auto p-4">
                <h1>About Us</h1>
                <p>This is the about page of our Next.js application.</p>
                <Link href="/">go home page</Link>
            </div>
        </>
    )
}