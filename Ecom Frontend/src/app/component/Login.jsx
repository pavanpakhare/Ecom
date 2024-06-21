"use client"
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import { stringify } from 'postcss'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'


export function Login() {
      const router = useRouter()


  
    const [User, setUser] = useState({
        username:'',
        password:'',
    })

   

const [udata, setData] = useState({})
   

const data=(e)=>{
  setUser({...User,[e.target.name]:e.target.value});
  
}

const login=async()=>{
  let uname=User.username
  let pass=User.password
  const url=(`http://localhost:8083/user/${uname}`)
 


    const res=await axios.get(url)
    const ud=res.data
    setData(ud)
    const username=ud[0].username
    const password=ud[0].password
  



  
  
  

  if(User.username==username && User.password==password){



  localStorage.setItem('user',JSON.stringify(ud[0]))
  
  console.log(localStorage.getItem('user'))
  
  router.push('/')

}else{
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="/pages/ragister">Sign up</a>'
});
}

}

  return (
    <section>
    
      <div className="grid  content-center">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Username{' '}
                  </label>
                  <div className="mt-2">
                    <input
                       value={User.username}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name='username'
                      onChange={data}
                      placeholder="Username"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                 
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      value={User.password}
                      name='password'
                      onChange={data}
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={login}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}
