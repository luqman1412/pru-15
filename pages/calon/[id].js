import Layout from "../../components/layout";
import { getAllCalonId, getCalonDetail } from "../../lib/calons";

export async function getStaticPaths() {
  const paths = await getAllCalonId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const calonDetail = await getCalonDetail(params.id);
  return {
    props: {
        calonDetail,
    },
  };
}

export default function Calon(calonDetail) {
  return (
    <>
     <Layout>
     <h1>Calon Detail </h1>
      <h2>{calonDetail.id}</h2>
     </Layout>
    </>
  );
}
