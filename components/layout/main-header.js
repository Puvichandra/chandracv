import Link from 'next/link'
import Image from 'next/image';

import { useState } from 'react';




function MainHeader(){
  const [show, setShow] = useState(false);

  


    return (

       

        <div className="sticky top-0 z-50">
        <nav className="bg-black">
            <div className="max-w-9xl mx-auto px-8">
                <div className="flex items-center justify-center h-20">
                    <div className=" flex items-center">
                        
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-40 md:space-x-30 sm:space-x-20">
                            
                                <Link href="/"><a className="flex-shrink-0" >
                                <Image className='relative z-30 inline object-cover w-12 h-12 border-20 border-white rounded-full' src="/img/main1.jpg" alt="Workflow" width={70} height={70}/>
                                </a></Link>
                            
                                <Link href="/"><a className="text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium uppercase"  >
                                    Home </a></Link>

                                <Link href="/Indiannavy"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium uppercase" >
                                   Indian Navy (1986-2001)</a></Link>
                             
                                <Link href="/singapore"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium uppercase">
                                  Singapore (2003-2018)</a></Link>

                                  <Link href="/gallery"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-lg font-medium uppercase">
                                  Gallery</a></Link>
  
                     
                            </div>
                        </div>
                    </div>
                  
                    <div className="flex w-full flex-row lg:hidden items-center justify-between mt-10 pb-5">
                        <div className="items-start">
                          <Link href="/"><a className="flex-shrink-0 " >
                          <div className="h-16 my-8 items-center fill-current">
                          <Image className='relative z-30 inline object-cover w-12 h-12 border-20 border-white rounded-full' src="/img/main1.jpg" alt="Workflow" width={50} height={50}/>
                          </div>
                              
                          </a></Link>
                        </div>
                      <div >
                        <button className="text-white dark:text-white hover:text-gray-300 inline-flex items-end justify-end p-2 rounded-md focus:outline-none mobile-menu-button"
                        onClick={() => setShow((s) => !s)}>
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:hidden mobile-menu duration-300 ease-out sm:transition-none"  style={{ display: show ?   "block":"none" }}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/"><a className="text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase block">
                    Home
                </a></Link>
                <Link href="/Indiannavy"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase block">
                Indian Navy (1986-2001)
                </a></Link>
  
                <Link href="/singapore"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase block">
                Singapore (2003-2018)
               </a></Link>

               <Link href="/gallery"><a className="text-white dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase block">
               Gallery
               </a></Link>
           

               <Link href="/"><a className="flex-shrink-0 hidden lg:block" >
                <div className="h-16 my-8">
                  <Image className='relative z-30 inline object-cover w-12 h-12 border-20 border-white rounded-full' src="/img/main1.jpg" alt="Workflow" width={100} height={100}/>
                  </div>
              </a></Link>
                
                </div>
            </div>
        </nav>
    </div>






      
    )

}

export default MainHeader;