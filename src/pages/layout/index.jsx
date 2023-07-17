import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import Footer from "./footer";
import Sidebar from "./sidebar";
import styles from './index.module.css'

const Layout = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <Outlet />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
