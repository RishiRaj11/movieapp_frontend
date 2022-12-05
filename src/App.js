import React, { useContext } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import Home from "./components/home/Home";
import { DataContext } from "./components/context/DataProvider";

const App = () => {
  const { account } = useContext(DataContext);
  let searchInput = "";
  const searchFunction = (value) => {
    searchInput = value;
  };
  return (
    <>
      <Router>
        <Header searchFunction={searchFunction} />
        <Routes>
          {account.email && account.userType === "Admin" ? (
            <Route path="/admin/login" element={<AdminLogin />} exact />
          ) : (
            <Route path="/" element={<Home />} exact />
          )}

          {account.email && account.userType === "User" ? (
            <Route path="/user/login" element={<UserLogin />} exact />
          ) : (
            <Route path="/" element={<Home />} exact />
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
