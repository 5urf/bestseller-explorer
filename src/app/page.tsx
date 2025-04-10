import { fetchBestsellerLists } from "@/app/lib/api";
import Link from "next/link";

export default async function Home() {
  const { results } = await fetchBestsellerLists();
  console.log("📢[page.tsx:6]: lists: ", results);
  return (
    <div>
      <ul>
        {results?.map((result) => (
          <Link
            key={result.list_name}
            href={`/list/${result.list_name_encoded}`}
          >
            <li>{result.display_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
