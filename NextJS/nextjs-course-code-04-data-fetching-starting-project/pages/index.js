import fs from "fs/promises";
import path from "path";
import Link from "next/link";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//- this part of the code will be server side does not get sent to client

export async function getStaticProps() {
  console.log("(re)generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        //sends user to differnt page
        // LINK[epic=data] data\dummy-backend.json
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; //if set to true returns 404page
  }

  return {
    props: {
      products: data.products,
    },
    // revalidate re-renders page in production after certain amount of seconds
    revalidate: 10, //! page will always be most recent in development
  };
}

export default HomePage;
