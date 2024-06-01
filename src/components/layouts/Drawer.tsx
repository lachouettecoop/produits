import { CiCircleChevLeft } from "react-icons/ci";

export default function Drawer({
  children,
  renderPage,
}: Readonly<{
  children: React.ReactNode;
  renderPage: React.ReactNode;
}>) {
  return (
    <div className="drawer md:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{renderPage}</div>
      <div className="drawer-side z-20">
        <label
          htmlFor="main-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-end md:hidden">
            <label
              className="btn btn-ghost"
              htmlFor="main-drawer"
              aria-label="close sidebar"
            >
              <CiCircleChevLeft size={"2rem"} />
            </label>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
