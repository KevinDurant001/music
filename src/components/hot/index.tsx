import type { FC } from "react";
import styless from "./index.module.less";
import Title from "../title";
import Button from "../button";
import Cover from "@/components/cover";
import { useNavigate } from "react-router-dom";
const Hot: FC = () => {
  const navigate = useNavigate();

  const handleCoverClick = () => {
    navigate("/play", { state: { id: 100 } });
  };
  return (
    <div className={styless.container}>
      <div className={styless.title}>
        <Title
          left="最受欢迎"
          right={<Button className={styless.btn}>全部查看</Button>}
          style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}
        ></Title>
      </div>
      <div className={styless.list}>
        {[1, 2, 3, 4, 5, 6].map((ite, ind) => {
          return (
            <Cover
              key={ind}
              style={{ widows: "165px" }}
              onClick={() => handleCoverClick()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hot;
