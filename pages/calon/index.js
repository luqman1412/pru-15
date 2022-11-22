import Layout from "../../components/layout";
import { getCalonList } from "../../lib/calons";

export async function getStaticProps() {
  const allCalonData = await getCalonList();
  return {
    props: {
      allCalonData,
    },
  };
}
export default function Calon({ allCalonData }) {
  return (
    <>
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Parlimen</th>
            <th>Parti</th>
            <th>Parti Full</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allCalonData.map((calon) => (
            <tr key={calon.id}>
              <th>{calon.id}</th>
              <th>{calon.nama}</th>
              <th>
                {calon.kod} - {calon.nama_parlimen}
              </th>
              <th>{calon.parti}</th>
              <th>{calon.parti_full}</th>
              <th>view</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout></>
  );
}
