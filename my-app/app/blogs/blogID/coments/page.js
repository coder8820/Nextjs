export default function Commnets({ params }) {
  const { blogID } = params;
  console.log(blogID);
  return (
    <div>
      <h1>Comment 1</h1>
      <h2>All commnets on {blogID}</h2>
      <h3>Comment 2</h3>
      <h4>Comment 3</h4>
      <h5>Comment 4</h5>
      <h6>Comment 5</h6>
    </div>
  );
}
