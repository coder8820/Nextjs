export default async function comment({ params }) {
  // console.log(params);
  let paramsObj = await params;
  const { blogID, comment } = await paramsObj;
  console.log(paramsObj);
  return (
    <div>
      <h1>Blog {blogID}</h1>
      <p>
        Comment No, <i>{comment}</i> on <b>{blogID} page</b>
      </p>
      <p>In next js file base routing can get all parent data</p>
      <p>Nested Routing is very easy than react router.</p>
    </div>
  );
}
