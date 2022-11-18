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
export default function Calon({ allPartiData }) {
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
            {allPartiData.map((calon, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{calon}</th>
                <th>view</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}
