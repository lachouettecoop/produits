"use client";
import Link from "next/link";
import MenuItem from "./MenuItem";
import useMenuItems, { LINKS } from "@/hooks/useMenuItems";
import { CiLogout } from "react-icons/ci";
import { useUser } from "@/state/user";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const menuitems = useMenuItems();
  const username = useUser((state) => state.name);

  return (
    <div className="hidden md:block">
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <Link href={LINKS.home} className="btn btn-ghost text-xl text-white">
            Drive
          </Link>
          <div className="m-auto">{username}</div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {menuitems.map((item) => {
              return (
                <li key={item.link}>
                  <MenuItem
                    label={item.label}
                    link={item.link}
                    Icon={item.Icon}
                    indicator={item.indicator}
                    classNames="btn btn-ghost"
                  />
                </li>
              );
            })}
            <div className="mx-2 border-l border-neutral-400"></div>
            <li className=" text-neutral-400">
              <button className="btn btn-ghost">
                <CiLogout />
                déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DesktopLayout;
