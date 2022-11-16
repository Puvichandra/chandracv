import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import degree from "../public/img/degree.png"
import { useState } from "react";
import { useEffect } from "react";


function SingaExperienceComp(){

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

        <div className='bg-gray-100'>
       <div className='text-center'> <a className='text-4xl text-gray-900  '> Work Experience (Singapore)</a></div>
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement className="vertical-timeline-element--work" date="2003-2005"
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#718096' }}
      icon={<img className="w-12 h-12 m-auto" src="img/mlion.png" alt="No image"/>}>
     <CardComponent  Titleone= "Milestone Engineering Pte. Ltd" 
     Titletwo="Singapore" imghead='/img/mazak.png' 
     description="It was bit rough time in the foreign land to adapt the working culture, 
     languages and food etc. After  service I learned  CNC programming and  got an opportunity
     in Singapore. I have worked in the above Company as a CNC programmer for 18 months" txclr='#fff' />
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="2005-2018"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/mlion.png" alt="No image"/>}
    >
    <CardComponent  Titleone="Safran Landing Systems, Singapore" imghead='/img/safran.png' description={<div><p>I joined in this company as Technician I on Aug-2005. 
    It is an Landing gear MRO(Maintenance repair Overhaul). 
    I gained lot of knowledge and experiences  in the commercial Aircraft MRO industry and involved  on all the overhaul process of an landing gear . 
    The dedication, commitment and enthusiasm lead my career to take over  Manager role.</p>
    <p className='pb-2 font-bold'>Positions held during my tenure:</p> 
    <ol>
    <li>Aircraft Technician I - 03 Years</li>
<li>Lead Aircraft Technician - 02 Years</li>
<li>Production Planner - 03 Years</li>
<li>Flow Manager - 02 Years</li>
<li>Distribution Manager -01 Year</li>
<li>Process Analyst - 02 Years </li>
    </ol>
</div>}  txclr={txclr} />
    </VerticalTimelineElement>
   
     </VerticalTimeline>

        </div>
    )
 

};

export default SingaExperienceComp;