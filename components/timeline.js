import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import degree from "../public/img/degree.png"
import { useState } from "react";
import { useEffect } from "react";


function TimelineComp(){

  
  const widthComp= '510px'
  const [isMobile, setIsMobile] = useState(false)
  

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
        widthComp= '250px'
    } else {
        setIsMobile(false)
        widthComp= '510px'
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


    return (

        // <div className='bg-gray-900 relative -mt-20 '>
        <div className='w-full h-full bg-cover bg-no-repeat  bg-fixed -mt-8' style={{backgroundImage:`url(/img/wall.jpg)`}}>
        {/* // <section><img className="w-full object-cover bg-cover bg-no-repeat bg-center z-20 "   src="/img/darkgrey.jpg" alt="no image"  /> */}
        
        <div className='text-center mt-4   w-full lg:py-4 lg:mx-28 xl:mx-2 lg:mt-8 text-lg px-8 bg-transparent md:text-4xl shadow-xl  text-black rounded-2xl xl:px-10 py-5'>Education</div>
       
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color:"#718096"}}
      contentArrowStyle={{ borderRight: '10px solid  rgb(255,255,255)' }}
      date="1998-2000"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/degree.png" alt="No image"/>}
    >
    <CardComponent  Titletwo="Master of Public Administration" description="Annamalai University, Chidambaram,Tamilnadu" bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="1974-1984"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/school.png" alt="No Image"/>}>
     <CardComponent  Titletwo="St. Peter's Higher Secondary School" description="Thanjavur, Tamilnadu" />
    </VerticalTimelineElement>
     </VerticalTimeline>
    

        {/* // </section> */}
      </div>
    )
    

};

export default TimelineComp;
