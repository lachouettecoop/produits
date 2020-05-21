import Layout from "components/Layout";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import cn from "classnames";
import { useState, Fragment } from "react";

const statutWorkflow = [
  "nouvelle",
  "imprimee",
  "preparation",
  "prete",
  "livree",
];
const classForStatut = (value) => ({
  "bg-green-400": value === "nouvelle",
  "bg-green-500": value === "imprimee",
  "bg-green-600": value === "preparation",
  "bg-green-700": value === "prete",
  "bg-green-900": value === "livree",
});

const Statut = ({ value }) => {
  if (!value) {
    return <Skeleton width={100} />;
  }

  return (
    <span
      className={cn(
        "rounded text-white px-2 py-1 shadow",
        classForStatut(value)
      )}
    >
      {value}
    </span>
  );
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
    <a
      className="py-4 px-8 my-4 w-1/3 hover:bg-gray-200 flex flex-col justify-between"
      href={code ? `/preparation.html?${code}` : "#"}
    >
      <div>
        <p className="flex justify-between items-center">
          <span className="text-4xl">
            {id ? `#${id}` : <Skeleton width={40} />}
          </span>
          <Statut value={statut} />
        </p>
        <DateCreation value={created_at} />
      </div>

      <div className="my-4">
        <p className="text-xl">{nom_chouettos || <Skeleton width={200} />}</p>
        <p className="text-gray-600">
          Tél :{" "}
          {chouettos ? (
            <a href={`tel:${chouettos.telephone}`}>{chouettos.telephone}</a>
          ) : (
            <Skeleton width={200} />
          )}
        </p>
        {notes !== "" && (
          <p className="mt-2 my-4 p-2 border-l border-gray-500 text-sm">
            {notes ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: notes.replace(/\n/g, "<br />"),
                }}
              />
            ) : (
              <Skeleton count={3} />
            )}
          </p>
        )}
      </div>

      <p className="text-right text-xl text-gray-600 mt-auto">
        {(total && total.toFixed(2)) || <Skeleton width={20} />}€
      </p>
    </a>
  );
};

const StatusFilters = ({ value, onChange, commandes }) => {
  const statuses =
    commandes &&
    commandes.reduce((acc, { statut }) => {
      return {
        ...acc,
        [statut]: acc[statut] ? acc[statut] + 1 : 1,
      };
    }, {});

  const sortByWorkflow = (a, b) => {
    return statutWorkflow.indexOf(a) - statutWorkflow.indexOf(b);
  };

  return (
    <div className="mt-4 flex content-center justify-between">
      {statuses ? (
        Object.keys(statuses)
          .sort(sortByWorkflow)
          .map((status) => {
            const isActive = status === value;
            return (
              <button
                className={cn(
                  "px-4 py-2 text-white font-bold",
                  classForStatut(status),
                  { "shadow-md": isActive, underline: isActive }
                )}
                onClick={() => onChange(isActive ? null : status)}
              >
                {status} ×{statuses[status]}
              </button>
            );
          })
      ) : (
        <Skeleton width={200} height={30} />
      )}
    </div>
  );
};

const Total = ({ commandes }) => {
  const total =
    commandes && commandes.reduce((acc, { total }) => acc + total, 0);

  return (
    <div className="my-4 pb-4 flex flex-col text-center">
      <span className="text-6xl">
        {Math.round(total) || <Skeleton width={20} />} €
      </span>
      <p className="text-gray-500">Total des commandes</p>
    </div>
  );
};

const Commandes = () => {
  const { data } = useSWR(
    `https://admin.lachouettecoop.fr/commandes?statut_ne=archivee&_sort=created_at:DESC`,
    {
      refreshInterval: 30000,
    }
  );

  const [statusFilter, setStatusFilter] = useState(null);

  const isMatchingFilters = (commande) => {
    return !statusFilter || commande.statut === statusFilter;
  };

  return (
    <Fragment>
      <Total commandes={data} />

      <StatusFilters
        value={statusFilter}
        onChange={setStatusFilter}
        commandes={data}
      />

      <div className="my-4 flex flex-wrap">
        {data
          ? data
              .filter(isMatchingFilters)
              .map((commande) => (
                <CommandeItem key={commande.id} {...commande} />
              ))
          : Array.from(Array(10)).map((_, index) => (
              <CommandeItem key={index} />
            ))}
      </div>
    </Fragment>
  );
};

const PreparationIndex = () => {
  return (
    <Layout>
      <main>
        <p>
          Cette page contient toutes les commandes passées sur le Drive,
          notamment à traiter.
        </p>
        <p>
          Elle est utilisée au Lab, pour aider à la préparation des commandes.
          La personne qui organise l'activité (le ou la GH) peut ainsi avoir un
          aperçu de l'état des commandes en cours et à venir.
        </p>

        <Commandes />
      </main>
    </Layout>
  );
};

export default PreparationIndex;
