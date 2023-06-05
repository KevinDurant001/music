import type { FC } from "react";
import styless from "./index.module.less";

import avater from "@/assets/tempImg/avatar.png";
const Header: FC = () => {
  return (
    <div className={styless.container}>
      <div className={styless.left}>
        <p>你好</p>
        <p className={styless.nickName}>james</p>
      </div>
      <div className={styless.right}>
        <img src={avater} alt="" />
      </div>
    </div>
  );
};

export default Header;
