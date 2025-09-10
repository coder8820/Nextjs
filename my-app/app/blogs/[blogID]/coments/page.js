export default function Commnets({ params }) {
  const { blogID } = params;
  console.log(blogID);
  return (
    <div>
      <h1>Comment {blogID}</h1>
      <h2>All commnets on {blogID}</h2>
    </div>
  );
}
