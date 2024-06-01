"use client";

import { useCart } from "@/state/cart";
import cx from "classnames";
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

const Product = ({
  id,
  label,
  description,
  price,
  priceDetails,
  pictureUrl,
  categories,
}: {
  id: string;
  label: string;
  description: string;
  price: string;
  priceDetails: string;
  pictureUrl: string;
  categories: string[];
}) => {
  const addProduct = useCart((state) => state.addProduct);
  const removeProduct = useCart((state) => state.removeProduct);
  const { [id]: quantity } = useCart((state) => state.cart);

  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="py-2">
        <Image src={pictureUrl} width={150} height={150} alt={label} />
      </figure>
      <div className="card-body py-4 border-t">
        <div className="card-title justify-between">
          <h2 className="">{label}</h2>
          <div className="min-w-20 text-right">{price}</div>
        </div>
        <div className="flex justify-between flex-1 items-end">
          <div>
            <p>{priceDetails}</p>
            <p>{description}</p>
          </div>
          <div className="flex items-center gap-2">
            {!!quantity && (
              <CiCircleRemove
                className="text-2xl text-warning cursor-pointer"
                strokeWidth="1"
                onClick={() => removeProduct(id)}
              />
            )}
            <div className={cx({ indicator: !!quantity })}>
              {!!quantity && (
                <span className="indicator-item indicator-bottom badge badge-accent opacity-90">
                  {quantity}
                </span>
              )}
              <button
                className="btn btn-primary btn-outline"
                onClick={() => addProduct(id)}
              >
                <CiShoppingBasket size="2rem" />
              </button>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end pt-2">
          {categories.map((category) => {
            return (
              <div key={category} className="badge badge-outline">
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
