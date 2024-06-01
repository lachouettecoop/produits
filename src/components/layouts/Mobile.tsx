import Link from "next/link";
import MenuItem from "./MenuItem";
import useMenuItems, { LINKS } from "@/hooks/useMenuItems";
import { CiLogout, CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useUser } from "@/state/user";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const menuitems = useMenuItems();
  const pathname = usePathname();
  const username = useUser((state) => state.name);

  const currentItem = menuitems.find((item) => item.link === pathname);

  return (
    <div className="md:hidden">
      <div className="navbar bg-primary text-primary-content">
        {currentItem?.withDrawer && (
          <div className="flex-none">
            <label
              htmlFor="main-drawer"
              className="btn btn-primary drawer-button md:hidden"
            >
              <CiMenuBurger size="1.5rem" />
            </label>
          </div>
        )}
        <div className="flex-1 justify-between">
          <Link href={LINKS.home} className="btn btn-ghost text-xl text-white">
            Drive
          </Link>
          <div className="hidden md:block m-auto">{username}</div>

          <button className="btn btn-ghost text-neutral-400">
            <CiLogout />
            déconnexion
          </button>
        </div>
      </div>
      {children}
      <div className="btm-nav bg-primary text-primary-content z-30">
        {menuitems.map((item) => {
          return (
            <MenuItem
              key={item.link}
              label={item.label}
              link={item.link}
              indicator={item.indicator}
              Icon={item.Icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileLayout;
