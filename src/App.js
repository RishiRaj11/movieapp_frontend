import React, { useContext,useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import Home from "./components/home/Home";
import { DataContext } from "./components/context/DataProvider";

const App = () => {
  const { account } = useContext(DataContext);
  const [searchInput,searchFunction]=useState("");
  

  return (
    <>
      <Router>
        <Header searchFunction={searchFunction} />
        <Routes>
          {account.email && account.userType === "Admin" ? (
            <Route path="/admin/login" element={<AdminLogin />} exact />
          ) : (
            <Route path="/" element={<Home searchInput={searchInput} />} exact />
          )}

          {account.email && account.userType === "User" ? (
            <Route path="/user/login" element={<UserLogin />} exact />
          ) : (
            <Route path="/" element={<Home searchInput={searchInput} />} exact />
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
