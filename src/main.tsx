import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BookPage from "pages/client/book";
import AboutPage from "pages/client/about";
import LoginPage from "pages/auth/login";
import RegisterPage from "pages/auth/register";
import Layout from "src/layout";
import 'styles/global.scss';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
    ,
    children: [
      {
        path: "/book",
        element: <BookPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
    ],
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {

    path: "/register",
    element: <RegisterPage />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
