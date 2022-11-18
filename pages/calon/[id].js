import { getAllCalonId, getCalonDetail } from "../../lib/calons";

export async function getStaticPaths() {
  const paths = getAllCalonId();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const calonDetail = getCalonDetail(params.id);
  return {
    props: {
      calonDetail,
    },
  };
}

export default function Calon(calonDetail) {
  return (
    <>
      <h1>Calon Detail</h1>
      {calonDetail.name}
    </>
  );
}
