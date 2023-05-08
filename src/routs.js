import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { WarehouseList } from "./Admin/warehouses/warehouseList";
import { ProductList } from "./Admin/products/productList";
import { Login } from "./Login/login";
import { RequestList } from "./Admin/requests/requestList";
import { AddWarehouse } from "./Admin/warehouses/addWarehouse";
import { UpWarehouse } from "./Admin/warehouses/updateWarehouse";
import { AddProduct } from "./Admin/products/addProduct";
import { UpdateProduct } from "./Admin/products/updateProduct";
import { Supervisor } from "./Admin/supervisor/supervisor";
import { AddSupervisor } from "./Admin/supervisor/addSupervisor";
import { UpdateSupervisor } from "./Admin/supervisor/updateSupervisor";
import { History } from "./Admin/requests/history";
import { SproductList } from "./Supervisor/productlist";
import { ProductHistory } from "./Supervisor/producthistory";
import { Header } from "./Admin/header/header";
import { AuthGuard } from "./guards/auth-guard";
import { StockRequest } from "./Supervisor/stockrequest";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        // guard for login
        element: <AuthGuard roles={[]} />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },

      // guards for admins
      {
        element: <AuthGuard roles={["admin"]} />,
        children: [
          {
            path: "/admin-home",
            element: <WarehouseList />,
          },
          {
            path: "/addp/:id",
            element: <AddProduct />,
          },
          {
            path: "/upp/:wid/:pid",
            element: <UpdateProduct />,
          },
          {
            path: "/SV",
            element: <Supervisor />,
          },
          {
            path: "/addSV",
            element: <AddSupervisor />,
          },
          {
            path: "/upSV/:id",
            element: <UpdateSupervisor />,
          },
          {
            path: "/req",
            element: <RequestList />,
          },
          {
            path: "/addw",
            element: <AddWarehouse />,
          },
          {
            path: "/upw/:id",
            element: <UpWarehouse />,
          },
        ],
      },

      // guards for supervisor
      {
        element: <AuthGuard roles={["supervisor"]} />,
        children: [
          {
            path: "/supervisor-home/:wid/:sid",
            element: <SproductList />,
          },
          {
            path: "/sq/:pid/:uid/:cq",
            element: <StockRequest />,
          },
          {
            path: "/PH/:uid",
            element: <ProductHistory />,
          },
        ],
      },

      //guards for both
      {
        element: <AuthGuard roles={["admin", "supervisor"]} />,
        children: [
          {
            path: "/products",
            element: <ProductList />,
          },
          {
            path: "/products/:id",
            element: <ProductList />,
          },

          {
            path: "/H",
            element: <History />,
          },
        ],
      },
    ],
  },
]);
