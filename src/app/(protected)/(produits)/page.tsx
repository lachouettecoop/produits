"use client";

import InputSearch from "@/components/InputSearch";
import Product from "@/components/Products";
import products from "@/mocks/products";
import { useState } from "react";

export default function Products() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col">
      <div className="sticky m-auto top-2 md:min-w-[500px] z-10">
        <InputSearch defaultValue={search} onChange={setSearch} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {products.map((product) => {
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
        })}
      </div>
    </div>
  );
}
