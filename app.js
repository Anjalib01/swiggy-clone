import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./src/components/header.js";
import BodyComponent from "./src/components/body.js";

const Layout = () => (
  <>
    <HeadComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);
