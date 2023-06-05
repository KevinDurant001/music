import type { FC } from "react";
import styless from "./index.module.less";
import Header from "@/components/header";
import Search from "@/components/search";
import Banner from "@/components/banner";
import Hot from "@/components/hot";
const Home: FC = () => {
  return (
    <div className={styless.container}>
      <div className={styless.header}>
        <Header />
      </div>
      <div className={styless.search}>
        <Search />
      </div>
      <div className={styless.banner}>
        <Banner />
      </div>
      <div className={styless.hot}>
        <Hot />
      </div>
    </div>
  );
};

export default Home;
