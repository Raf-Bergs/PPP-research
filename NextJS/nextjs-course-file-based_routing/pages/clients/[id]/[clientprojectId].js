import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>
        the project page for a specific project for a selected client
        {router.query.clientprojectId}
      </h1>
    </div>
  );
}
