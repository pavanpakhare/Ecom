import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import { SignUp } from "@/app/component/Signup";

function page() {
    return (
        <div>
        <Navbar/>
        <SignUp/>
        <Footer/>
        </div>
    );
}

export default page;