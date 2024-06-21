import Footer from "@/app/component/Footer";
import { Login } from "@/app/component/Login";
import Navbar from "@/app/component/Navbar";
function page() {
    return (
        <div>
        <Navbar/>
        <Login/>
        <Footer/>
        </div>
    );
}

export default page;