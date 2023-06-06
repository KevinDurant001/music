import { FC, useState } from "react";
import { Swiper } from "antd-mobile";
import styless from "./index.module.less";
const Banner: FC = () => {
  const [swiperList] = useState(["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"]);

  const items = swiperList.map((color, index) => {
    return (
      <Swiper.Item key={index} className={styless.swiper}>
        <div
          className={styless.content}
          style={{ background: color }}
          onClick={(color) => handleSwiperItmeClick(color)}
        ></div>
      </Swiper.Item>
    );
  });

  const handleSwiperItmeClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className={styless.container}>
      <Swiper
        autoplay={true}
        loop={true}
        indicator={() => <></>}
        autoplayInterval={1500}
      >
        {items}
      </Swiper>
    </div>
  );
};

export default Banner;
