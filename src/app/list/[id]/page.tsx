export default async function Page({ params }: { params: { id: string } }) {
  const resParam = await params;
  console.log("📢[page.tsx:3]: resParam: ", resParam);
  return (
    <div>
      <h1>{resParam.id}</h1>
    </div>
  );
}
