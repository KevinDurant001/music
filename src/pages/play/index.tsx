import { FC, useEffect } from "react";
import styless from "./index.module.less";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "@/components/title";
import Icon from "@/components/icon";
const Home: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className={styless.coninter}>
      <div className={styless.header}>
        <Title
          left={
            <Icon
              type="icon-back"
              style={{ fontSize: "20px" }}
              className={styless.icon}
              onClick={handleBackClick}
            />
          }
          title={<div className={styless.title}>正在播放</div>}
          right={
            <Icon
              type="icon-like"
              className={styless.icon}
              style={{ fontSize: "25px" }}
            />
          }
        ></Title>
      </div>

      <div className={styless.cover}>
        <img
          src="https://p1.music.126.net/a1cRJ0QPSYOONE4wZSCmyA==/109951168655706792.jpg?param=130y130"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
