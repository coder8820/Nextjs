import { notFound } from "next/navigation";

export default async function Blog({ params }) {
  // console.log(params);
  let paramsObj = await params;
  const { blogID } = await paramsObj;
  console.log(paramsObj);
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return (
    <div>
      <h1>Blog {blogID}</h1>
      <p>
        All comments on <b>{blogID} page</b>
      </p>
    </div>
  );
}
