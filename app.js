import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./components/header";
import BodyComponent from "./components/body.js";

const Layout = () => (
  <>
    <HeadComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
