import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./src/components/header.js";
import BodyComponent from "./src/components/body.js";
import Aboutus from "./src/components/AboutUs.js";
import Footer from "./src/components/Footer.js";
import Error from "./src/components/Error.js";
import RestaurantDetails from "./src/components/RestaurantDetails.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./src/components/CartClass.js";
import { lazy } from "react";

const ContactUs = lazy(() => import("./src/components/ContactUs.js"));

const Layout = () => (
  <>
    <HeadComponent />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart name="anjali" />,
      },
    ],
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
