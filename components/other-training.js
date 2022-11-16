import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import { useEffect, useState } from 'react';

const trainingData=[
{
id:"1",    
date:"July-2001",
titletwo:"Developing Solutions with Visual Basic",
description:"Course done at Aptech Computer Education, Fort Kochi"
},
{
id:"2", 
date:"July-2002",
titletwo:"Autocad 2002 2D Drafting, Productivity tools, 3d Modelling",
description:"Course done at Integrated Software Technology, Thanjavur"
},
{
id:"3",
date:"Aug-2002",
titletwo:"CNC operations and Programming training program",
description:"Course done at Science and Technology Entrepreneurs Park,Trichy"
},
{
id:"4",
date:"Oct-2003",
titletwo:"Programming and Operation on CNC vertical machining Centre",
description:"Course done at Industries Service Institue, Chennai"
},

]



function OtherCertiicateComp(){
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

        // <div className='bg-gray-900'>
         <div className='w-full h-full bg-cover bg-no-repeat bg-fixed ' style={{backgroundImage:`url(/img/wall.jpg)`}}>
       <div className='text-center  py-4 '> <a className='text-4xl text-black'>Other Training done in India</a></div>
    <VerticalTimeline className='bg-transparent'>

    {trainingData.map((training) => (
      <VerticalTimelineElement key={training.id} className="vertical-timeline-element--work" date={training.date}
      contentStyle={{  background: "#fff", width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#718096' }}
      icon={<img className="w-12 h-12 m-auto" src="img/mlion.png" alt="no image"/>}>
     <CardComponent  Titletwo={training.id+"."+training.titletwo}
     description={training.description}  bgclr={bgclr} txclr='#fff'/>
    </VerticalTimelineElement>

  
  ))}
     </VerticalTimeline>

        </div>
    )
    

};

export default OtherCertiicateComp;