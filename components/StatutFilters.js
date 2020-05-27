import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import { classForStatut, sortByWorkflow, labelOf } from "domain/commandes";

const StatutFilters = ({ value, onChange, commandes }) => {
  const statuses =
    commandes &&
    commandes.reduce((acc, { statut, total }) => {
      const current = acc[statut] || {
        count: 0,
        total: 0,
      };

      return {
        ...acc,
        [statut]: {
          count: current.count + 1,
          total: current.total + Number(total),
        },
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
                  "px-4 py-2 text-white font-bold flex flex-col",
                  classForStatut(status),
                  { "shadow-md": isActive, underline: isActive }
                )}
                onClick={() => onChange(isActive ? null : status)}
                key={status}
              >
                <span>
                  {labelOf(status)} ×{statuses[status].count}
                </span>
                <span className="text-xs">
                  {Math.round(statuses[status].total)} €
                </span>
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
