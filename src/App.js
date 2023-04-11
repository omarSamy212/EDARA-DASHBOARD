import logo from './logo.svg';
import './App.css';
import { Login } from './Login/login';
import {WarehouseList} from './Admin/warehouses/warehouseList'
import { ProductList } from './Admin/products/productList';
import { Outlet } from 'react-router';







function App() {
  return (
    <>
  <Outlet />
 
    </>
  );
}

export default App;
