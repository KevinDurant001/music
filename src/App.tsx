import styless from "./App.module.less";
import { Outlet, useNavigate } from "react-router-dom";

import Icon from "./components/icon";
import classNames from "classnames";
import { useState } from "react";

interface ImenubarListType {
  title: string;
  icon: string;
  path: string;
}

const menubarList: ImenubarListType[] = [
  {
    title: "首页",
    icon: "icon-home",
    path: "/",
  },
  {
    title: "排行",
    icon: "icon-paihang",
    path: "/ranking",
  },
  {
    title: "我的音乐",
    icon: "icon-yinle",
    path: "/myMusic",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/my",
  },
];

function App() {
  const [activeIndex, setActive] = useState(0);
  const navigate = useNavigate();
  const handleMenubarClick = (ite: ImenubarListType, ind: number) => {
    setActive(ind);
    navigate(ite.path);
  };
  return (
    <div className={styless.container}>
      <Outlet />
      <div className={styless.menubar}>
        {menubarList.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(styless.menubarItem, {
                [styless.activeIndex]: index == activeIndex,
              })}
              onClick={() => handleMenubarClick(item, index)}
            >
              <Icon type={item.icon} className={classNames(styless.icon)} />
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
