import Image from 'next/image'
import tg from  '../public/img/main1.jpg'
import Keyskillsprogressbar from './key-skills';
import ProgressBar from './key-skillsecond';
import ProgressbarSkill from './key-skillthird';
import { saveAs } from "file-saver";





function LandingComponent(){

    const onDownload2 = () => {
        saveAs("/doc/ChandraResume.docx", "ChandraResume.docx");
      };
    return(
        <section>
        <div>

      
        <div className="relative">

        <div><img className="w-full bg-cover bg-no-repeat bg-center h-128"   src="/img/land-flight.jpg" alt="no image"  />
        <div className='absolute top-0 bg-black opacity-40 w-full h-128'>
       
        <p  className=" text-2xl xl:text-5xl text-center pt-44 text-white xl:pt-24 font-poppins md:font-bold">  Hi, I am Chandra</p>
        <p  className="text-sm xl:text-xl text-center text-white p-2 font-poppins md:font-bold"> Email: sekar_vishaal@yahoo.co.in</p>
        <p  className="text-sm xl:text-xl text-center text-white p-2 font-poppins md:font-bold"> Phone: +917810065537</p>
        <div className='text-center'>
        <button className='text-white text-center bg-yellow-900 p-2 mt-8 rounded-lg text-2xl font-poppins font-bold mx-auto border-2 border-white hover:bg-black' onClick={onDownload2} >Download Resume</button>
        </div>
            
        </div>
        </div>
        </div>
      
        </div>




        <div className='w-full  text-center -mt-48 xl:-mt-10 '>
       
       <div className='bg-gray-300  z-24'>
       <div className="w-full mt-28 pt-10 relative xl:absolute xl:mt-28">
       <img className="object-cover -mt-2 w-28  h-28 xl:w-48 xl:h-48 border-4 border-white object-center rounded-full xl:-mt-52 mx-auto" src='/img/main1.jpg' alt="Workflow"/>
       </div>
        <div className='flex  flex-wrap pt-2'>
        <div className='basis-none  border-b-2 lg:basis-1/3  pt-2 pb-52 md:py-10  xl:border-r-2 xl:border-black'>
        <p  className=" text-lg md:text-4xl text-center text-black  font-adelia font-extrabold"> About Me</p>
        <p className='px-2 xl:px-20 text-left pt-8'>I &#39;m a very ambitious and hardworking individual, with broad skills and  with experience of more than 25 years in Aerospace Industry, Software and Lean Principles.
Furthermore, I &#39;m adept at handling multiple tasks on a daily basis competently and at working well under pressure.
Always committed to learn new things so that I can consistently achieve better results.</p>
        </div>

        <div className='basis-none w-full mx-auto border-b-2 lg:basis-1/3  pt-2 pb-52 md:py-10  xl:border-r-2 xl:border-black'>
        <p  className=" text-lg md:text-4xl text-center text-black  pt-24 font-adelia font-extrabold"> Personal Info</p>
        <div className='px-8 lg:px-10'>
        <p className='px-2 xl:px-20 text-left pt-8 '><span className="font-bold">Age:</span>    54 Years</p>
        <p className='px-2 xl:px-20 text-left pt-4 '><span className="font-bold">Marital Status:</span>    Married</p>
        <p className='px-2 xl:px-20 text-left pt-4 '><span className="font-bold">Current Status:</span>     I quit my job in Aug 2018. The main reason is to spend time 
        with my third kid, who was just a toddler. In the chase of career, I missed my first two kids childhood days and felt not to miss this time. So I quit and spent 
        my time, also  I make use of most of my free time to self-taught lot of software  like  python, Django, Flask, Bootstrap, Tailwind, Nodejs, React, Nextjs, solidity,
         web3, Kotlin technologies, Blender  etc… by going through all training videos from Udemy, you tube etc.. 

Currently I &#39;m looking for a job and able to join within 02 weeks of time if opportunity is given.
  </p>
      
  

        </div>
        
        </div>

        <div className='basis-none w-5/6 mx-auto border-b-2 lg:basis-1/3  pt-2 pb-52 py-2 md:py-10  xl:border-r-2 xl:border-black'>
        <div>
        <p  className=" text-lg md:text-4xl text-center text-black pb-10 font-adelia font-extrabold"> Key Skills</p>
        </div>

       <div className='px-6 pb-10'>
       <ProgressbarSkill />
       </div>
        
        
        

      

        </div>
        </div>
        
         
        </div>
       </div>

       <div>
       
       </div>

        
        </section>
        
    );
}

export default LandingComponent;