import Layout from "../../components/layout";
import { getParlimensList } from "../../lib/parlimens";

export async function getStaticProps() {
  const allParlimenData = await getParlimensList();
  console.log(allParlimenData);
  return {
    props: {
      allParlimenData,
    },
  };
}
export default function Calon({ allParlimenData }) {
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Parlimen</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allParlimenData.map((calon, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{calon.nama}</th>
              <th>{calon.kod}</th>
              <th>view</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
