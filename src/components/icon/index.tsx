import type { FC, CSSProperties } from "react";
import classNames from "classnames";
import styless from "./index.module.less";
export type IiconProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  type: string;
};

const Icon: FC<IiconProps> = (props) => {
  const { className, style, onClick, type } = props;
  const classNamess = classNames(
    "iconfont",
    styless.container,
    type,
    className
  );
  return <i className={classNamess} style={style} onClick={onClick}></i>;
};

export default Icon;
