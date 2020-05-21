import DateCommande from "components/DateCommande";
import Layout from "components/Layout";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineBarcode } from "react-icons/ai";
import algoliasearch from "algoliasearch/lite";

const ALGOLIA_CONFIG = {
  // v1
  // appId: "M6AKDBX36Z",
  // searchKey: "200ad253b958794d0ff8a2a187d74560",
  // v2
  appId: "ZSB27F96MU",
  searchKey: "991cf78786ea4d6715ea04e33ba9fe10",
};

const searchClient = algoliasearch(
  ALGOLIA_CONFIG.appId,
  ALGOLIA_CONFIG.searchKey
);
const index = searchClient.initIndex("produits");

const Produit = ({ quantite, nom, product, category }) => {
  return (
    <li className="flex justify-left items-center mb-4">
      <p className="mr-6 w-24">
        <span className="font-bold">{quantite || <Skeleton width={5} />}</span>{" "}
        × {(product && product.price.toFixed(2)) || <Skeleton width={20} />}€
      </p>
      <div className="text-l leading-none ">
        <p>
          {nom || (product && product.name) || <Skeleton width={450} />}
          {product && product.barCode !== "" && (
            <span className="text-xs ml-4 text-gray-600">
              <AiOutlineBarcode className="inline mr-1" />
              {product.barCode}
              <AiOutlineBarcode className="inline ml-1" />
            </span>
          )}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          {category ? (
            category.replace("ALIMENTAIRE > ", "")
          ) : (
            <Skeleton width={300} />
          )}
        </p>
      </div>
    </li>
  );
};
const getDeepestCategoryPath = (product) => {
  return (
    product["categories.lvl6"] ||
    product["categories.lvl5"] ||
    product["categories.lvl4"] ||
    product["categories.lvl3"] ||
    product["categories.lvl2"] ||
    product["categories.lvl1"]
  );
};

const Produits = ({ produits, total }) => {
  const [items, setItems] = useState(
    produits || Array.from(Array(20)).map((_, id) => ({ id }))
  );

  useEffect(() => {
    const ids = produits && produits.map(({ odoo_id }) => odoo_id);
    if (!ids) {
      return;
    }

    index
      .search("", {
        hitsPerPage: ids.length,
        filters: ids
          .map((id) => `__export__.product_template_${id}`)
          .map((id) => `objectID:${id}`)
          .join(" OR "),
      })
      .then(({ hits }) =>
        hits
          .map((product) => {
            const id = product.objectID.replace(
              "__export__.product_template_",
              ""
            );

            return {
              ...produits.find(({ odoo_id }) => odoo_id === id),
              id: id,
              product: product,
              category: getDeepestCategoryPath(product),
            };
          })
          .sort((a, b) => a.category.localeCompare(b.category))
      )
      .then(setItems);
  }, [produits]);

  return (
    <div className="border px-6 py-4 w-full">
      <ul>
        {items.map((item) => (
          <Produit {...item} key={item.id} />
        ))}
      </ul>

      <p className="mt-2 pt-2 text-right border-t text-xs">
        Total annoncé au Chouettos{" "}
        <strong className="text-xl pl-2">
          {total ? total.toFixed(2) : <Skeleton width={50} />}€
        </strong>
      </p>
    </div>
  );
};

const Preparation = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useSWR(() => (id ? `/commandes/${id}` : null));

  return (
    <main>
      <div className="flex items-center">
        <Link href="/preparations">
          <a className="w-1/2 hover:underline text-gray-600 hover:text-gray-800 flex items-center">
            <span className="border-2 rounded-full inline-block mr-2 p-1">
              <FiArrowLeft />
            </span>
            Revenir à la liste des commandes
          </a>
        </Link>
        <span className="w-1/2 font-bold text-4xl text-right">#{id}</span>
      </div>
      <div className="border-2 my-3 py-3 px-4 clear-both">
        <div className="flex">
          <p className="font-bold w-2/3">
            Nom :{" "}
            {data && data.chouettos ? (
              data.chouettos.nom
            ) : (
              <Skeleton width={150} />
            )}
          </p>
          <p className="w-1/3 text-right">
            {data && data.created_at ? (
              <a href={`/preparation.html?${data.code}`}>
                <DateCommande date={new Date(data.created_at)} />
              </a>
            ) : (
              <Skeleton width={150} />
            )}
          </p>
        </div>
        <p className="font-bold">
          N° de téléphone :{" "}
          {data && data.chouettos ? (
            data.chouettos.telephone
          ) : (
            <Skeleton width={100} />
          )}
        </p>
        {!data ||
          (data.notes !== "" && (
            <p className="my-2">
              <span className="underline">Notes :</span>
              <br />
              {data && data.notes ? (
                <span
                  className="text-sm"
                  contentEditable="true"
                  dangerouslySetInnerHTML={{
                    __html: data.notes.replace(/\n/g, "<br />"),
                  }}
                />
              ) : (
                <Skeleton count={3} />
              )}
            </p>
          ))}
      </div>

      <Produits produits={data && data.produits} total={data && data.total} />
    </main>
  );
};
const Page = () => (
  <Layout>
    <Preparation />
  </Layout>
);

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
export async function getStaticProps() {
  return { props: {} };
}

export default Page;
