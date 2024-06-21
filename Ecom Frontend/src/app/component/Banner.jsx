import second from "../images/ban.jpg";
import Image from "next/image";

function Banner() {
    return (
         <div className="">
          <Image
            className=" object-center rounded-md "
            src={second}

            alt="Picture of the author"
          />
        </div>
        

    );
}

export default Banner;