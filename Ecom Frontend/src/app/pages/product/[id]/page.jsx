"use client"
import Cursual from "@/app/component/Cursual";
import Footer from "@/app/component/Footer";
import LogoutNav from "@/app/component/LogoutNav";
import Navbar from "@/app/component/Navbar";
import axios from "axios";
import {useState} from 'react'

import {useEffect} from 'react'
import Swal from "sweetalert2";

const Post = ({ params }) => {
    
  const [data, setData] = useState({})


    
const order= async()=>{
  let use=localStorage.getItem("user")
  let juse=JSON.parse(use)
  let res= await axios.post("http://localhost:8083/place",{
    "product":data,
    "usr":juse,
  
  })
  Swal.fire({
  title: "Product is added",
  text: "your order is placed",
  icon: "success"
});

}

  const  addcart =async()=> {
    let usr=localStorage.getItem("user")
    let jusr=JSON.parse(usr)
    let res= await axios.post("http://localhost:8083/addcart",{
      "producto":data,
      "usr":jusr,
  
  })

   Swal.fire({
  title: "Product is added",
  text: "your order is placed",
  icon: "success"
});
  
  
  }

  useEffect(() => {
     (async ()=>{
       const res= await axios.get(`http://localhost:8083/product/${params.id}`)
       const pr=await res.data
   setData(pr)
    })();
  }, []);
  return (
    <div>
      
    <LogoutNav/>
     <Cursual img1={data.img1} img2={data.img2}/>
    <h1 className=" p-6 my-4 text-3xl font-semibold text-black">{ data.title}</h1>
          <div className="flex items-center justify-between">
              <span className="title-font p-6 text-xl font-bold text-gray-900">₹{data.price}</span>
               <button
               onClick={e=>order()}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                place Order
              </button>
             
              <button
               onClick={e=>addcart()}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>

    

      <Footer />
    </div>
  );
};

export default Post;
