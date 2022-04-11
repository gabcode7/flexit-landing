import Head from "next/head";
import { PropsWithChildren } from "react";

interface IProps {
  title: string;
  description: string;
}

export const Layout = (props: PropsWithChildren<IProps>) => {
  const { title, description, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};
