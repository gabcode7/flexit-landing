import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../Footer";

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
      <main className="px-4">{children}</main>
      <Footer />
    </div>
  );
};
