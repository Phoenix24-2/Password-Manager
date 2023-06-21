import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
