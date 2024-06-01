"use client";

import InputSearch from "@/components/InputSearch";
import Product from "@/components/Products";
import productsMock from "@/mocks/products";
import { useCart } from "@/state/cart";
import { normalizeString } from "@/utils";
import cx from "classnames";
import { useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";

export default function Home() {
  const cart = useCart((state) => state.cart);

  const [search, setSearch] = useState("");

  const products = Object.keys(cart)
    .map((id) => {
      return productsMock.find((p) => p.id === id);
    })
    .filter((product) =>
      normalizeString(product?.label).includes(normalizeString(search))
    );

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Votre Panier : </h1>
      <div className="flex flex-col gap-2">
        <div className="text-xl">
          <div>
            produits : <span className="font-bold">12</span>
          </div>
          <div>
            Total : <span className="font-bold">320,34 €</span>
          </div>
        </div>
        <div className="md:max-w-[300px]">
          <InputSearch defaultValue={search} onChange={setSearch} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {products.map((product) => {
          if (product) {
            return (
              <Product
                key={product.id}
                id={product.id}
                label={product.label}
                description={product.description}
                price={product.price}
                priceDetails={product.priceDetails}
                pictureUrl={product.pictureUrl}
                categories={product.categories}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="fixed bottom-20 md:top-28 right-4 z-10">
        <button
          className={cx("btn rounded-xl btn-accent md:text-2xl", {
            "btn-disabled": products.length === 0,
          })}
        >
          Valider votre panier
          <CiCircleChevRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
