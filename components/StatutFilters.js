import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import { classForStatut, sortByWorkflow } from "domain/commandes";

const StatutFilters = ({ value, onChange, commandes }) => {
  const statuses =
    commandes &&
    commandes.reduce((acc, { statut }) => {
      return {
        ...acc,
        [statut]: acc[statut] ? acc[statut] + 1 : 1,
      };
    }, {});

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
                key={status}
              >
                {status} ×{statuses[status]}
              </button>
            );
          })
      ) : (
        <Skeleton
          width={130}
          height={40}
          count={5}
          wrapper={({ children }) => <span className="mr-4">{children}</span>}
        />
      )}
    </div>
  );
};

export default StatutFilters;
