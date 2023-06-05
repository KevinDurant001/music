import type { FC, ReactNode, CSSProperties } from "react";
import styless from "./index.module.less";
import classNames from "classnames";

type TitleProps = {
  left?: string | ReactNode;
  title?: string | ReactNode;
  right?: string | ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Title: FC<TitleProps> = (props) => {
  const { className, title, left, right, style } = props;
  const classNamess = classNames(styless.container, className);
  return (
    <div className={classNamess} style={{ ...style }}>
      <div className={styless.left}>{left}</div>
      <div className={styless.title}>{title}</div>
      <div className={styless.right}>{right}</div>
    </div>
  );
};

export default Title;
