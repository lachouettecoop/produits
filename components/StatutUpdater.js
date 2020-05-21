import {
  classForStatut,
  previousStatutOf,
  nextStatutOf,
} from "domain/commandes";
import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import { FiEdit, FiCheckCircle, FiRewind, FiXCircle } from "react-icons/fi";
import { useState, Fragment } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Statut = ({ value, onEdit }) => {
  if (!value) {
    return <Skeleton width={100} />;
  }

  return (
    <div className={cn("text-white shadow rounded", classForStatut(value))}>
      <span className="pl-2 pr-1 py-1">{value}</span>
      <button
        className="pl-1 pr-2 py-1 inline hover:text-red-300"
        onClick={() => onEdit()}
        title="Modifier"
      >
        <FiEdit />
      </button>
    </div>
  );
};

const ChangeStatutButton = ({ id, newStatut, variant }) => {
  console.log({ newStatut });

  return (
    <button
      className={cn(
        "flex-1 py-4 text-white text-2xl border-4 border-transparent hover:border-gray-800",
        classForStatut(newStatut),
        {
          "font-bold": variant === "next",
        }
      )}
    >
      {variant === "previous" && <FiRewind className="inline mr-2" />}
      <span>{newStatut}</span>
      {variant === "next" && <FiCheckCircle className="inline ml-2" />}
    </button>
  );
};

const StatutUpdater = ({ currentValue, id }) => {
  const [isEdition, setIsEdition] = useState(false);
  const previous = previousStatutOf(currentValue);
  const next = nextStatutOf(currentValue);

  const handleClose = () => setIsEdition(false);

  return (
    <Fragment>
      <Statut value={currentValue} onEdit={() => setIsEdition(true)} />
      <Modal isOpen={isEdition} onRequestClose={handleClose}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <button
              title="Fermer"
              className="float-right flex flex-col items-center  text-red-600 hover:text-red-700"
              onClick={handleClose}
            >
              <FiXCircle className="text-4xl" />
              <span className="text-xs">(Esc)</span>
            </button>
            <h2 className="text-4xl">Modifier le statut de la commande</h2>

            <p>
              Cet écran vous permet de modifier le statut de la commande, pour
              refléter son état d'avancement durant l'ouverture du Lab.
            </p>
            <p>
              Une commande suit un avancement défini, aussi{" "}
              <strong>
                seuls les statuts suivants et précédents sont sélectionnables
                ici.
              </strong>
            </p>
          </div>

          <p
            className={cn(
              classForStatut(currentValue),
              "text-white text-center py-8 flex flex-col"
            )}
          >
            <span className="text-4xl font-bold">{currentValue}</span>
            <span className="">Statut actuel</span>
          </p>

          <div>
            <p className="text-center text-gray-500">
              Choisissez le nouveau statut ci-dessous :
            </p>
            <div className="flex items-stretch mt-1">
              {previous && (
                <ChangeStatutButton
                  id={id}
                  newStatut={previous}
                  variant="previous"
                />
              )}
              {next && (
                <ChangeStatutButton id={id} newStatut={next} variant="next" />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default StatutUpdater;
