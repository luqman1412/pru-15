import Layout from "../../components/layout";
import { getAllPartisId, getPartiDetail } from "../../lib/partis";

export async function getStaticPaths() {
  const paths = await getAllPartisId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const partiDetail = await getPartiDetail(params.id);
  console.log(partiDetail)
  return {
    props: {
        partiDetail,
    },
  };
}

export default function Parti(partiDetail) {
  return (
    <>
     <Layout>
     {partiDetail.name}
     </Layout>
    </>
  );
}
