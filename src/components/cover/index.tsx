import type { FC, CSSProperties, ReactNode } from "react";
import styless from "./index.module.less";
import classNames from "classnames";
import DefaultIcon, { IiconProps } from "../icon";

type ICoverProps = {
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  Icon?: string;
};

const Home: FC<ICoverProps> = (props) => {
  const { style, className, Icon, onClick } = props;
  const classNamess = classNames(styless.container, className);
  return (
    <div className={classNamess} style={style}>
      <div className={styless.cover} onClick={onClick}>
        <img
          src="https://p1.music.126.net/SATl5PH1NpEPHsYaB24t5A==/109951166269856073.jpg?param=140y140"
          alt=""
        />
      </div>

      <div className={styless.name}>你的形状</div>
      <div className={styless.download}>
        <DefaultIcon type={Icon || "icon-download"} className={styless.icon} />{" "}
        3.5M下载
      </div>
    </div>
  );
};

export default Home;
