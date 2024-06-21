"use client"

import { Cart } from "@/app/component/Cart";
import Footer from "@/app/component/Footer";
import LogoutNav from "@/app/component/LogoutNav";

function page() {
    return (
        <div>
            <LogoutNav/>
            <Cart/>
            <Footer/>
        </div>
    );
}

export default page;