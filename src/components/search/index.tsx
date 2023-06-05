import { useState } from "react";
import type { FC } from "react";
import styless from "./index.module.less";
import { Input } from "antd-mobile";

const Search: FC = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styless.container}>
      <div className={styless.left}>
        <Input
          placeholder="搜索相册、歌曲"
          className={styless.ipt}
          value={value}
          onChange={(val) => setValue(val)}
        />
      </div>
      <div className={styless.right}></div>
    </div>
  );
};

export default Search;
