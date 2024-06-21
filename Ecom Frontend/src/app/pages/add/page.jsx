"use client"
import LogoutNav from "@/app/component/LogoutNav";
import Add from "../../component/Add";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { useState } from "react";

function page() {
    const [Islogin, setIslogin] = useState(false);
    return (
        <div>
             <LogoutNav/>

            <Add />

            <Footer/>
        </div>
    );
}

export default page;