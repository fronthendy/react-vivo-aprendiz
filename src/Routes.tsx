import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import Header from "./components/Header";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/servicos",
      element: <Servicos />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
