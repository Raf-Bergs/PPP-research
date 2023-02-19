import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load Data...
    // naviagte programmatically
    // router.push("/clients/raf/project-a");
    router.push({
      pathname: "/clients/[id]/[clientprojectId]",
      query: { id: "raf", clientprojectId: "project-a" },
    });
  }
  return (
    <div>
      <h1>The projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
