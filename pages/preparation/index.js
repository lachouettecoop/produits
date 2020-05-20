import Layout from "components/Layout";

const PreparationIndex = ({ commandes }) => {
  console.log(commandes);
  return (
    <Layout>
      <main>
        <p>
          Cette page contient toutes les commandes passées sur le Drive,
          notamment à traiter.
        </p>

        <p className="bg-red-700 p-4 mt-8 text-white text-4xl text-center">
          En cours de réalisation !
        </p>
      </main>
    </Layout>
  );
};

export default PreparationIndex;
