export default function Commnets({ params }) {
  const { blogID } = params;
  console.log(blogID);
  return (
    <div>
      <h1>Comment 1</h1>
      <h2>All commnets on {blogID}</h2>
    </div>
  );
}
