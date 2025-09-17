import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Files page",
  },
  description: "This is the files page",
};

export default async function File({ params }) {
  const filePath = (await params.filePath?.join("/")) || "No path provided";
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p>The file path is {filePath}</p>
      <p>You can access any file in the files directory.</p>
      <p>For example:</p>
      <ul>
        <li>/files/documents/report.pdf</li>
        <li>/files/images/photo.jpg</li>
        <li>/files/videos/movie.mp4</li>
        <li>/files/anything/you/want/to/access.txt</li>
      </ul>
      <div>
        <p>
          This is one of the most important next js application im learning from
          youtube and some other plateform
        </p>
      </div>
      <Link href="/">go to home page</Link>
    </div>
  );
}
