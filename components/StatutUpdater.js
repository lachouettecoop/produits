import {
  classForStatut,
  previousStatutOf,
  nextStatutOf,
} from "domain/commandes";
import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import {
  FiEdit,
  FiCheckCircle,
  FiRewind,
  FiXCircle,
  FiActivity,
} from "react-icons/fi";
import { useState, Fragment, useEffect } from "react";
import Modal from "react-modal";
import { mutate, cache } from "swr";
import { fetcher } from "./Layout";

Modal.setAppElement("#__next");

const doUpdate = async (id, newStatut) => {
  await fetcher(`/commandes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      statut: newStatut,
    }),
  });

  const cacheKeys = cache.keys().filter((key) => key.startsWith("/commandes"));
  cacheKeys.forEach((key) => mutate(key));
};

const Statut = ({ value, onEdit }) => {
  if (!value) {
    return <Skeleton width={100} />;
  }

  return (
    <button
      className={cn(
        "text-white shadow rounded",
        classForStatut(value),
        "hover:underline"
      )}
      onClick={() => onEdit()}
      title="Modifier"
    >
      <span className="pl-2 pr-1 py-1">{value}</span>
      <FiEdit className="ml-1 mr-2 inline" />
    </button>
  );
};

const ArchiverButton = ({ id, onSuccess }) => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step < 2) return;

    doUpdate(id, "archivee").then(onSuccess);
  }, [step]);

  const handleNext = () => setStep((step) => step + 1);

  return (
    <button
      className="m-auto text-red-500 text-xs hover:underline"
      onClick={handleNext}
    >
      {step === 0 &&
        "Je veux marquer cette commande comme étant une erreur et l'enlever des listings."}
      {step === 1 && (
        <span className="text-xl">
          <strong>ATTENTION</strong> cette opération est définitive.
          <br />
          Cliquez à nouveau si vous êtes sûr·e de savoir ce que vous faites ?
          ;-)
        </span>
      )}
      {step === 2 && (
        <span className="text-xl">
          <FiActivity className="inline" /> Suppression en cours…
        </span>
      )}
    </button>
  );
};

const ChangeStatutButton = ({ id, newStatut, variant, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);

    await doUpdate(id, newStatut);

    setIsLoading(false);
    onSuccess();
  };

  return (
    <button
      className={cn(
        "flex-1 py-4 text-white text-2xl border-4 border-transparent hover:border-gray-800",
        classForStatut(newStatut),
        {
          "font-bold": variant === "next",
        }
      )}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        "Modification en cours …"
      ) : (
        <Fragment>
          {variant === "previous" && <FiRewind className="inline mr-2" />}
          <span>{newStatut}</span>
          {variant === "next" && <FiCheckCircle className="inline ml-2" />}
        </Fragment>
      )}
    </button>
  );
};

const StatutUpdater = ({ currentValue, id }) => {
  const [isEdition, setIsEdition] = useState(false);
  const previous = previousStatutOf(currentValue);
  const next = nextStatutOf(currentValue);

  const handleClose = () => setIsEdition(false);

  // TODO Url pour édition cf https://github.com/zeit/next.js/blob/canary/examples/with-route-as-modal/pages/index.js#L16

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
                  onSuccess={handleClose}
                />
              )}
              {next && (
                <ChangeStatutButton
                  id={id}
                  newStatut={next}
                  variant="next"
                  onSuccess={handleClose}
                />
              )}
            </div>
            <p className="text-center">
              <ArchiverButton id={id} onSuccess={handleClose} />
            </p>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default StatutUpdater;
