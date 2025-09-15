export const metadata = {
  title: {
    absolute: "Files page",
  },
};

export default async function File({ params }) {
  console.log(await params);
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p>The file path is {await params.filePath}</p>
    </div>
  );
}
