import Footer from "@/Components/Layout/Footer";
import Header from "@/Components/Layout/Header";
import React from "react";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  const hide = ["/maps"];
  const shouldHide = hide.includes(location.pathname.toLowerCase());
  return (
    <div>
      {!shouldHide && <Header />}
      <Outlet />
      {!shouldHide && <Footer />}
    </div>
  );
};

export default MainLayout;
