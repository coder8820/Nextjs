export default async function File({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Catch All Routes</h1>
      <p>The file path is {JSON.stringify(await params.filePath)}</p>
    </div>
  );
}
