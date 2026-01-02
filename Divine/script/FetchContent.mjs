import fs from "fs";
import path from "path";

const API_URL = "http://localhost:1337";

const outputDir = path.resolve("public/data");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchData(endpoint) {
  const res = await fetch(`${API_URL}/api/${endpoint}?populate=*`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const data = await res.json();

  fs.writeFileSync(
    path.join(outputDir, `${endpoint}.json`),
    JSON.stringify(data, null, 2)
  );

  console.log(`Wrote ${endpoint}.json`);
}

await fetchData("portfolios");
await fetchData("categories");
