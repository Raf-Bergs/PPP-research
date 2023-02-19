import { useRouter } from "next/router";

export default function PortfolioIDPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The portfolio ID page </h1>
    </div>
  );
}
