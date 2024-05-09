import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/post`, {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
