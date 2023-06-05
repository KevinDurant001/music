import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.less";
import "normalize.css";
import { DotLoading } from "antd-mobile";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={
        <DotLoading color="linear-gradient(to right, #fc8958, #fc575c)" />
      }
    ></RouterProvider>
  </React.StrictMode>
);
