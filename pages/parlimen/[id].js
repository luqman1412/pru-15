import Layout from "../../components/layout";
import { getAllParlimensId, getParlimenDetail } from "../../lib/parlimens";

export async function getStaticPaths() {
  const paths = await getAllParlimensId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const parlimenDetail = await getParlimenDetail(params.id);
  return {
    props: {
        parlimenDetail,
    },
  };
}

export default function Parlimen(parlimenDetail) {
  return (
    <>
     <Layout>
     <h1>Parlimen Detail </h1>
      <h2>{parlimenDetail.id}</h2>
     </Layout>
    </>
  );
}
