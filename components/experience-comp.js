import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import degree from "../public/img/degree.png"
import { useEffect, useState } from 'react';



function ExperienceTopComp(){
  const bgclr="#718096"
  const txclr="#f7fafc"
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

        // <div className='bg-gray-100'>
       <div className='w-full h-full bg-cover bg-no-repeat bg-fixed ' style={{backgroundImage:`url(/img/ripple.jpg)`}}>
       <div className='text-center py-4'> <a className='text-4xl text-gray-900  '> Work Experience</a></div>
  
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement className="vertical-timeline-element--work" date="2003-2018"
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#718096' }}
      icon={<img className="w-12 h-12 m-auto" src="img/mlion.png" alt="No Image"/>}>
     <CardComponent  Titletwo="Singapore" imghead='/img/singapore.png' description="I 've worked in Aviation Tech firm." bgclr={bgclr}  txclr='#fff' btnCaption="Read More.." linkdata="/singapore" />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="1986-2001"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="No Image" />}
    >
    <CardComponent  Titletwo="Indian Navy" imghead='/img/Vikrant.png' description="Served in Indian Navy for 15 Years 3 Months" bgclr={bgclr} txclr={txclr} btnCaption="Read More.." linkdata="/Indiannavy"/>
    </VerticalTimelineElement>

    
     </VerticalTimeline>

        </div>
    )
    

};

export default ExperienceTopComp;
