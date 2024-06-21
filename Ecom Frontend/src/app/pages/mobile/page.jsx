"use client"
import Footer from "@/app/component/Footer";
import LogoutNav from "@/app/component/LogoutNav";
import Mobile from "@/app/component/Mobile";
import Navbar from "@/app/component/Navbar";


function page() {
    return (
        <div className=" w-full items-center">
         <LogoutNav/>
        <Mobile/> 

        <Footer/>     
        </div>
    );
}

export default page;