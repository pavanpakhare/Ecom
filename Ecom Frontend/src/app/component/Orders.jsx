"use client"

import React, { useState,useEffect } from 'react'
import { Trash, Heart } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'



export function Orders() {
    const [cart, setCart] = useState([])
    const router=useRouter()

   const removebyid= async(id,e)=>{
    let res=await axios.get(`http://localhost:8083/deletorder/${id}`)
    let d=await res.status
    console.log(id)
    Swal.fire("SweetAlert2 is working!");
    
    // router.push('/pages/cart')

   }


  const data= async ()=>{
  let users=localStorage.getItem("user")
  let user=JSON.parse(users)

  const res=await axios.get('http://localhost:8083/orders')
   const crd= await res.data
   setCart(crd)
   console.log(crd)
  }

  useEffect(() => {
  data()
  }, [])
  
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">all Orders</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
       Admin
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cart.map((product) => (

          <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.product.profile}
                alt={product.product.title}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.product.title}</h3>
                    <p className="text-sm">{product.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{product.product.price}</p>
                     {console.log()}
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" onClick={e=>removebyid(product.id,e)} className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={16} />
                    <span>Cancle</span>
                  </button>
                 
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
     
      <div className="flex justify-end space-x-4">
      <a href="/">

        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
          Back to shop
        </button>
          </a>
     
      </div>
    </div>
  )
}