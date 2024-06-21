import Footer from "@/app/component/Footer";
import LogoutNav from "@/app/component/LogoutNav";
import Navbar from "@/app/component/Navbar";
import Watch from "@/app/component/Watch";

function page() {
    return (
        <div>
            <LogoutNav/>
            <Watch/>
            <Footer/>
        </div>
    );
}

export default page;