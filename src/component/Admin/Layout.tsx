import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex flex-1 flex-col overflow-y-hidden h-screen">
        <Navbar />
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
