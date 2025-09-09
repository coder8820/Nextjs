export default async function Page1({ params }) {
  console.log(await params);
  return (
    <>
      <h1>Blog 1</h1>
      <p>This is the content of blog 1.</p>
    </>
  );
}
