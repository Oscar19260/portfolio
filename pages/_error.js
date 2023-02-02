import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      <h1 className="text-center">{statusCode}</h1>
      <p className="text-center">Couldn't load you page ;(</p>
    </Layout>
  );
};

export default _error;
