import Layout from "components/Layout";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";

const Statut = ({ value }) => {
  if (!value) {
    return <Skeleton width={100} />;
  }

  return <span className="bg-gray-600 text-white px-4">{value}</span>;
};

const DateCreation = ({ value }) => {
  return (
    <span className="text-sm text-gray-600">
      {value ? new Date(value).toLocaleString() : <Skeleton width={100} />}
    </span>
  );
};

const CommandeItem = ({
  nom_chouettos,
  total,
  statut,
  created_at,
  id,
  notes,
  chouettos,
  code,
}) => {
  return (
    <div className="bg-gray-100 py-4 px-8 my-4 mr-2  w-2/5">
      <p>
        <span className="text-4xl mr-8">
          {id ? `#${id}` : <Skeleton width={40} />}
        </span>
        <Statut value={statut} />
      </p>
      <p>
        <DateCreation value={created_at} />
      </p>
      <p className="text-xl mt-4">
        {nom_chouettos || <Skeleton width={200} />}
        <strong className="ml-2">
          {(total && total.toFixed(2)) || <Skeleton width={20} />}€
        </strong>
      </p>
      <p>
        Tél :{" "}
        {chouettos ? (
          <a href={`tel:${chouettos.telephone}`}>{chouettos.telephone}</a>
        ) : (
          <Skeleton width={200} />
        )}
      </p>
      <p className="mt-2 my-4 p-4 bg-gray-200 text-sm">
        {notes ? (
          <span
            dangerouslySetInnerHTML={{ __html: notes.replace(/\n/g, "<br />") }}
          />
        ) : (
          <Skeleton count={3} />
        )}
      </p>
      <div>
        <a
          href={code ? `/preparation.html?${code}` : "#"}
          className="bg-black text-white my-4 p-2"
        >
          Voir la fiche
        </a>
      </div>
    </div>
  );
};

const Commandes = () => {
  const { data } = useSWR(`https://admin.lachouettecoop.fr/commandes`, {
    refreshInterval: 30000,
  });

  return (
    <div className="my-4 flex flex-wrap">
      {data
        ? data.map((commande) => (
            <CommandeItem key={commande.id} {...commande} />
          ))
        : Array.from(Array(10)).map((_, index) => <CommandeItem key={index} />)}
    </div>
  );
};

const PreparationIndex = ({ commandes }) => {
  return (
    <Layout>
      <main>
        <p>
          Cette page contient toutes les commandes passées sur le Drive,
          notamment à traiter.
        </p>

        <Commandes />
      </main>
    </Layout>
  );
};

export default PreparationIndex;
