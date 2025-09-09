export default async function Blog({ params }) {
  // console.log(params);
  let paramsObj = await params;
  const { blogID } = await paramsObj;
  console.log(paramsObj);
  return (
    <div>
      <h1>Blog{blogID}</h1>
      <p>This is the content of blog.</p>
    </div>
  );
}
