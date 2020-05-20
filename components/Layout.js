import Head from "next/head";
import { SWRConfig } from "swr";

const Layout = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (...args) => fetch(...args).then((res) => res.json()),
    }}
  >
    <Head>
      <title>Le Drive — La Chouette Coop</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>

    <div className="container mx-auto max-w-screen-md">
      <header>
        <img
          className="float-right w-20 -mt-3"
          alt="Logo de La Chouette Coop"
          src="logo.jpg"
        />
        <h1 className="mt-3 mb-5 text-2xl">
          <strong className="font-bold text-4xl">Le Drive</strong> de La
          Chouette Coop
        </h1>
      </header>

      {children}
    </div>
  </SWRConfig>
);

export default Layout;
