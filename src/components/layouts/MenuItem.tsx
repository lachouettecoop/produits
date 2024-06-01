"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

const MenuItem = ({
  link,
  label,
  Icon,
  indicator,
  classNames = "",
}: {
  link: string;
  label: string;
  indicator?: string;
  Icon: IconType;
  classNames?: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={cx(classNames, {
        ["text-white"]: pathname === link,
        ["text-neutral-400"]: pathname !== link,
      })}
    >
      <div className={cx({ indicator })}>
        {!!indicator && (
          <span className="indicator-item indicator-bottom badge badge-accent opacity-80">
            {indicator}
          </span>
        )}
        <Icon className="text-3xl" />
      </div>
      {label}
    </Link>
  );
};

export default MenuItem;
