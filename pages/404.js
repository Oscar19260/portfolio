import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        this page doesn't exist, what are you trying to do? Please return&nbsp;
        <Link legacyBehavior href="/">
          <a>home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
