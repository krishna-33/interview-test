import { createBrowserRouter, Outlet } from "react-router-dom";
import Accounting from "../pages/Accounting";
import PurchaseOrder from "../pages/Purchase_Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, 
    children: [
      {
        path: "",
        element: <Accounting />, 
      },
      {
        path: "purchase-order", 
        element: <PurchaseOrder />, 
      },
    ],
  },
]);

export default router;
