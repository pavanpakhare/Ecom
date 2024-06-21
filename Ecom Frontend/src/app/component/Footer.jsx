import { ChevronRight } from 'lucide-react'

function Footer() {
    return (
        <footer className="w-full bg-neutral-400
        ">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
                <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          
            <div className="  p-5 object-center mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Ecom</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Our Team</li>
               
              </ul>
            </div>
        
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
  
          <span className="ml-4 text-lg font-bold">Ecom</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2023 Ecom. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;