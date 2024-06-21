"use client"

import Elctronic from "@/app/component/Elctronic";
import Footer from "@/app/component/Footer";
import LogoutNav from "@/app/component/LogoutNav";


function page() {
    return (
        <div>
            <LogoutNav/>
           <Elctronic/> 
           <Footer/>
        </div>
    );
}

export default page;