import CircleProgressBar from './circular-progrsspbar';
import classes from './skillrating.module.css'

const skilData = [
    {
        id:1,
        subject:"HTML",
        percentage:"95",
        Experience:"5 Years",
        description:" Practicing in Web Development for more than 8 years."
    },

    {
        id:2,
        subject:"CSS",
        percentage:"75",
        Experience:"5 Years",
        description:"Practicing in Web Development for more than 8 years."
    },

    {
        id:3,
        subject:"Bootstrap",
        percentage:"75",
        Experience:"5 Years",
        description:"Practicing in Web Development for more than 8 years. I find bootstrap is  one of the easiest tool to style the pages"
    },

    {
        id:4,
        subject:"Tailwind",
        percentage:"70",
        Experience:"One year",
        description:"Practicing in Web Development last 01 year. I find this tool give more flexibility to style the web pages"
    },
    {
        id:5,
        subject:"Javascript",
        percentage:"60",
        Experience:"Two year",
        description:"Callback, promises, ES6, asynchronous etc... mainly for web development"
    },

    {
        id:6,
        subject:"Python",
        percentage:"60",
        Experience:"Two year",
        description:"Twinkter Kit, web scrapping tools"
    },

    {
        id:7,
        subject:"Django",
        percentage:"60",
        Experience:"One year",
        description:"Created a blog site. Used SQlite, Postgresql, Bootstrap, HTML"
    },
    {
        id:8,
        subject:"Flask",
        percentage:"60",
        Experience:"One year",
        description:"Created a blog site. Used SQlite, Postgresql, Bootstrap, HTML"
    },
    {
        id:9,
        subject:"React",
        percentage:"70",
        Experience:"One year",
        description:"Created Front end Components"
    },

    {
        id:10,
        subject:"Node",
        percentage:"60",
        Experience:"One year",
        description:"Created very few backend server app. used API, Authentication system"
    },

    {
        id:11,
        subject:"NextJs",
        percentage:"60",
        Experience:"One year",
        description:"Created a few sites. Used, React,Tailwind, HTML, mangoDb"
    },
    {
        id:12,
        subject:"Kotlin",
        percentage:"60",
        Experience:"Two Years",
        description:"Created Mobile Apps for Android"
    },
    {
        id:13,
        subject:"Ms Office",
        percentage:"75",
        Experience:"20 Years",
        description:"Created Mobile Apps for Android"
    },

    {
        id:14,
        subject:"Ms Access",
        percentage:"75",
        Experience:"20 Years",
        description:"Created Mobile Apps for Android"
    },

    {
        id:15,
        subject:"VBA(Excel, Access)",
        percentage:"75",
        Experience:"20 Years",
        description:"Created Mobile Apps for Android"
    },

    {
        id:16,
        subject:".Net",
        percentage:"60",
        Experience:"5 Years",
        description:"Created Mobile Apps for Android"
    },
    {
        id:17,
        subject:"Ms Sql Server",
        percentage:"60",
        Experience:"4 Years",
        description:"Created Mobile Apps for Android"
    },

    {
        id:18,
        subject:"Solidity",
        percentage:"60",
        Experience:"1 Years",
        description:"Created Mobile Apps for Android"
    },
    {
        id:19,
        subject:"Dapp(WEB3)",
        percentage:"60",
        Experience:"1 Years",
        description:"Created Mobile Apps for Android"
    },
    {
        id:20,
        subject:"Adobe Photoshop",
        percentage:"40",
        Experience:"1 Years",
        description:"Created Mobile Apps for Android"
    },
    {
        id:21,
        subject:"Blender",
        percentage:"40",
        Experience:"1 Years",
        description:"Created Mobile Apps for Android"
    },




 
]

function SkillratingComp(){

    return (
        // <div className='w-full  bg-white py-10'>
         <div className='w-full h-full bg-cover bg-no-repeat bg-fixed' style={{backgroundImage:`url(/img/ripple.jpg)`}}>
        <div className='text-center py-4'> <a className='text-4xl text-gray-900  '> IT Skills</a></div>
        <div className='md:border-4 border-cyan-900 bg-white opacity-95 rounded-3xl xl:m-28 '>
        <div className='flex flex-row flex-wrap md:p-20 gap-8 w-11/12 items-stretch mx-auto justify-center '>

        

        {skilData.map((x)=>(
            <div key={x.id} className='bg-gray-100 md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-2/12 mx-auto border-2 rounded-3xl shadow-2xl'>
            <div >
            <div className='mt-8'>
             <CircleProgressBar headTitle={x.subject} percentage={x.percentage}/>
            </div>
            <div className={classes.card__copy}>
               <p className='text-left font-poppins '><span className='font-bold'>Experience: </span>{x.Experience}</p>
            </div>
            </div>
            </div>
        ))}
     

 

      </div>
      </div>
      </div>
    );
  }
 
export default SkillratingComp;