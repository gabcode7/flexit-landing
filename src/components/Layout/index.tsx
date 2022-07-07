import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface IProps {
  title: string;
  description: string;
}

export const Layout = (props: PropsWithChildren<IProps>) => {
  const { title, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="2xl:flex 2xl:justify-center"></div> */}
      <div className="m-auto0 px-4 max-w-maxScreen">
        <Header />

        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
