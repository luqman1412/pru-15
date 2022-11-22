import Layout from "../../components/layout";
import { getPartisList } from "../../lib/partis";

export async function getStaticProps() {
  const allPartiData = await getPartisList();
  return {
    props: {
      allPartiData,
    },
  };
}
export default function Partis({ allPartiData }) {
  return (
    <>
      <Layout>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPartiData.map((parti) => (
              <tr key={parti.id}>
                <th>{parti.id}</th>
                <th>{parti.name}</th>
                <th>view</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}
