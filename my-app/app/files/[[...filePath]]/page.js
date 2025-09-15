export const metadata = {
  title: {
    absolute: "Files page",
  },
};

export default async function File({ params }) {
  const filePath = params.filePath?.join("/") || "No path provided";
  // console.log(filePath);
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p>The file path is {filePath}</p>
    </div>
  );
}
