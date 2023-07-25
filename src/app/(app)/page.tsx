import { ksReader } from "@/lib/ksReader";

export default async function HomePage() {
  const posts = await ksReader.collections.posts.all();
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
