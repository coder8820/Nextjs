export default async function Blog1({ params }) {
  const { blogID } = await params;
  console.log(blogID);
  return (
    <>
      <h1>Blog 1 {blogID}</h1>
      <p>This is the content of blog 1.</p>
    </>
  );
}
