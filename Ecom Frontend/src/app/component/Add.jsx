"use client"
import {useState} from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
function Add() {

    const [product, setproduct] = useState({
        
            
            "title": "",
            "profile": "",
            "img1": "",
            "img2": "",
            "cat": "",
            "price": ""
            }
    )

const addproduct=async()=>{
   const res=await axios.post("http://localhost:8083/addproduct",product)
 if(res.status=='200'){
    Swal.fire({
  title: "product is added Succesfully ",
  text: "Product is added to database ",
  icon: "success"
});
}
}

const data=(e)=>{

    console.log(e.target.name,":",e.target.value)
    setproduct({...product,[e.target.name]:e.target.value})

}
    
    return (




    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
         
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Add Prodduct
          </h2>
         
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Title{' '}
                </label>
                <div className="mt-2">
                  <input
                  name="title"
                  onChange={data}
                  
                  
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Title"
                  ></input>
                </div>
              </div>

              <div>
                 <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  profile image{' '}
                </label>
                <div className="mt-2">
                  <input
                    onChange={data}
                    
                    name="profile"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="url"
                    placeholder="profile image"
                  ></input>
                </div>
              </div>

               <div>
                 <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  image 1{' '}
                </label>
                <div className="mt-2">
                  <input
                onChange={data}

                name='img1'
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="url"
                  placeholder="image 1"
                  ></input>
                </div>
              </div>

               <div>
                 <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  image 2{' '}
                </label>
                <div className="mt-2">
                  <input
                onChange={data}
                  name='img2'
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="url"
                    placeholder="image 2"
                  ></input>
                </div>
              </div>

               <div>
                 <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  catogory{' '}
                </label>
                <div className="mt-2">
                  <input
                  onChange={data}

                  name='cat'
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="catogory"
                  ></input>
                </div>
              </div>

               <div>
                 <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  price{' '}
                </label>
                <div className="mt-2">
                  <input
                 onChange={data}
                  name='price'
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Price"
                  ></input>
                </div>
              </div>


              

              
              
              
              



              <div>
                <button
                onClick={addproduct}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Add <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>

    
    </section>
      
        );
}

export default Add;