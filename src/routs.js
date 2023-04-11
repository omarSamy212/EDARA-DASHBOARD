import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { WarehouseList } from "./Admin/warehouses/warehouseList";
import {ProductList} from './Admin/products/productList'
import { Login } from "./Login/login";
import {RequestList} from "./Admin/requests/requestList"
import {AddWarehouse} from "./Admin/warehouses/addWarehouse"
import {AddProduct} from "./Admin/products/addProduct"
import { Supervisor } from "./Admin/supervisor/supervisor";
import { AddSupervisor } from "./Admin/supervisor/addSupervisor";
import { History } from "./Admin/requests/history";
import { SproductList } from "./Supervisor/productlist";
import { ProductHistory } from "./Supervisor/producthistory";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
{
    path: "/WH",
    element: <WarehouseList />,
},
{
    path: "/",
    element: <Login />,
},
{
 path:"/products",
 element:<ProductList />
 

},
{
 path:"/products/:id",
 element:<ProductList />
},
{
    path:"/req",
    element:<RequestList />
},
{
    path:"/addw",
    element:<AddWarehouse />
},
{
    path:"/addp",
    element:<AddProduct />
},
{
    path:"/SV",
    element:<Supervisor />
},
{
    path:"/addSV",
    element:<AddSupervisor />
},
{
    path:"/H",
    element:<History />
},

{
    path:"/SP",
    element:<SproductList />
},
{
    path:"/PH",
    element:<ProductHistory />
}


        ],


    }

        ]
   

);