import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/body";
import { RouterProvider, createBrowserRouter, Outlet} from "react-router";
import About from "./src/components/About";
import Error from "./src/components/Error";
const Applayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};


const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout></Applayout>,
      children:[
        {path: "/",
        element: <Body></Body>,
        },
        {
          path: "/about",
          element: <About></About>,
        }
      ],
      errorElement: <Error></Error>,
    }, 
  ],
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
