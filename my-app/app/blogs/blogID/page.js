const blogData = {
  test: "This is test blog",
  helo: "This is helo blog",
  demo: "This is demo blog",
};

// app/blogs/[blogID]/page.js
export default function BlogPage({ params }) {
  const { blogID } = params;
  console.log(blogID);

  return (
    <div>
      <h1>Blog {blogID}</h1>
      <p>This is the content of blog {blogContent}.</p>
    </div>
  );
}
