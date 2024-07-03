import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home";
import PurchaseOrder from "../pages/Purchase_Order";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/purchase-order",
      element: <PurchaseOrder />,
    },
  ]);

  export default router