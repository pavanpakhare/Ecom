"use client"
import { useEffect,useState } from 'react';
import axios from 'axios'
import Link from 'next/link';





function Elctronic() {

 
  const [product,setProduct] = useState([])
  useEffect(() => {
    const api=async()=>{
      let res=await axios.get("http://localhost:8083/products/electronics")
      let data= await res.data
    
      setProduct(data)
    }
 api()
  }, []); 
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        

        <div className="mt-6   shadow-sm grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <div key={product.id} className="group relative shadow-md">
              
                <Link href={`/pages/product/${product.id}`}>

              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.profile}
                  alt={toString(product.id)}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  
                </div>
                <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
              </div>
      
                  </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Elctronic