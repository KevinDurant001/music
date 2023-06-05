import type { FC, ReactNode, CSSProperties } from "react";
import classNames from "classnames";
import styless from "./index.module.less";

type IBtnProps = {
  color?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
};

const Button: FC<IBtnProps> = (props) => {
  const { color, className, children, onClick, style } = props;

  const classnamess = classNames(styless.container, className);
  return (
    <button
      className={classnamess}
      style={{ backgroundColor: color, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
