import { NextPage } from "next";
import Head from "next/head";
import { HeadInterface } from "../data/types";

const HeadLayout: NextPage<HeadInterface> = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default HeadLayout;
