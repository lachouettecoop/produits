import CommandeItem from "components/CommandeItem";
import Layout from "components/Layout";
import StatutFilters from "components/StatutFilters";
import { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";

const Total = ({ commandes }) => {
  const total =
    commandes && commandes.reduce((acc, { total }) => acc + total, 0);

  return (
    <div className="my-4 pb-4 flex flex-col text-center">
      <span className="text-6xl">
        {Math.round(total) || <Skeleton width={145} />} €
      </span>
      <p className="text-gray-500">Total des commandes</p>
    </div>
  );
};

const Commandes = () => {
  const { data } = useSWR(
    "https://admin.lachouettecoop.fr/commandes?statut_ne=archivee&_sort=created_at:DESC",
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

      <StatutFilters
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
