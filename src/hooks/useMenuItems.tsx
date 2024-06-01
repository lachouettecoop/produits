"use client";

import { useCart } from "@/state/cart";
import { useUser } from "@/state/user";
import { Role } from "@/types";

import { CiShoppingBasket } from "react-icons/ci";
import { CiReceipt } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";

export const LINKS = {
  home: "/",
  cart: "/panier",
  commands: "/commandes",
  processing: "/preparations",
  login: "/login",
};

const MENU_ITEMS = [
  {
    label: "Produits",
    link: LINKS.home,
    Icon: CiShop,
    withDrawer: true,
    roles: [Role.Admin, Role.Client],
  },
  {
    label: "Panier",
    link: LINKS.cart,
    Icon: CiShoppingBasket,
    withDrawer: false,
    roles: [Role.Admin, Role.Client],
  },
  {
    label: "Commandes",
    link: LINKS.commands,
    Icon: CiReceipt,
    withDrawer: true,
    roles: [Role.Admin, Role.Client],
  },
  {
    label: "Préparations",
    link: LINKS.processing,
    Icon: CiMemoPad,
    withDrawer: true,
    roles: [Role.Admin, Role.Preparer],
  },
];

const useMenuItems = () => {
  const role = useUser((state) => state.role);
  const cartQuantity = useCart((state) =>
    Object.values(state.cart).reduce((acc, product) => acc + product, 0)
  );

  return MENU_ITEMS.filter((item) => item.roles.includes(role)).map((item) => {
    let indicator;
    if (item.link === LINKS.cart && cartQuantity) {
      indicator = String(cartQuantity);
    }
    return {
      label: item.label,
      link: item.link,
      withDrawer: item.withDrawer,
      Icon: item.Icon,
      indicator,
    };
  });
};

export default useMenuItems;
