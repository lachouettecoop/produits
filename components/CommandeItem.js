import Skeleton from "react-loading-skeleton";
import StatutUpdater from "components/StatutUpdater";

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
    <div className="my-4 w-1/2 md:w-1/3 hover:bg-gray-200  relative">
      <div className="absolute top-0 right-0 mt-4 mr-8">
        <StatutUpdater currentValue={statut} id={id} />
      </div>
      <a
        className="py-4 px-8 flex flex-col justify-between"
        href={code ? `/preparation.html?${code}` : "#"}
      >
        <div>
          <p className="text-4xl">{id ? `#${id}` : <Skeleton width={40} />}</p>
          <DateCreation value={created_at} />
        </div>

        <div className="my-4">
          <p className="text-xl">{nom_chouettos || <Skeleton width={200} />}</p>
          <p className="text-gray-600">
            Tél : {chouettos ? chouettos.telephone : <Skeleton width={200} />}
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
    </div>
  );
};

export default CommandeItem;
