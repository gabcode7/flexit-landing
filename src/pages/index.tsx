import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { HomePage } from "../components/_Pages/Home";

const Home: NextPage = () => {
  return (
    <Layout
      title="Flexit"
      description="Acercamos a las personas que buscan trabajo flexible y de corto plazo con empresas que necesitan apoyos temporales de manera rápida, y todo en un par de clicks."
    >
      <HomePage />
    </Layout>
  );
};

export default Home;
