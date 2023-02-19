import { useRouter } from "next/router";

export default function BlogPostPage() {
  //triple dots could be halpful to send extra data for filtering
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>the blog posts</h1>
    </div>
  );
}
