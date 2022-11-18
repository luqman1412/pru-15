import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <ul>
          <h1>PRU 15</h1>
          <li>
            <Link href="/calon">Calon</Link>
          </li>
          <li>
            <Link href="/parlimen">Parlimen</Link>
          </li>
          <li>
            <Link href="/parti">Parti</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
