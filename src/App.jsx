import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./views/dashboard";
import Customer from "./views/customer";
import Orders from "./views/Orders";
import Analytics from "./views/Analytics";
import Message from "./views/Messages";
import Products from "./views/Products";
import Reports from "./views/Reports";
import Settings from "./views/Settings";
import AddProduct from "./views/Add_Product";
import Logout from "./views/Logout";
import "./style/style.scss";

const App = () => {
 

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout/>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="customer" element={<Customer />} />
        <Route path="orders" element={<Orders />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="message" element={<Message />} />
        <Route path="products" element={<Products />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default App;
