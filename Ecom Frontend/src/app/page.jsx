"use client";


import Product from "./component/Product";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutNav from "./component/LogoutNav";
import Banner from "./component/Banner";
import { Login } from "./component/Login";
export default function Home() {
  const [Islogin, setIslogin] = useState(false);

  const lc=()=>{
   const us= localStorage.getItem("user")
     console.log(us)
  }

  useEffect(() => {
    (() => {
      let toke = localStorage.getItem("user");

      if (toke != null) {
        setIslogin(true);
      }
    })();
  }, []);
  return (
    <div>
      {(Islogin)? <LogoutNav/>:<Navbar/>}
      <main className="bg-white p-5 h-700 w-600">
        <Banner/>
        <Product />
      </main>
      <Footer />
    </div>
  );
}
