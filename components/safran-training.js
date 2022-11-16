import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import { useEffect, useState } from 'react';

const trainingData=[
{
id:"1",    
date:"Oct-2006",
titletwo:"Airbus A320 Main Landing Gear Training",
description:"Course done at Messier Services Asia Pte Ltd,Safran Singapore"
},
{
id:"2", 
date:"Apr-2008",
titletwo:"Airbus A330/ A340 Main Landing Gear Training Theory of operation, fault analysis and maintenance practices",
description:"Course done at Messier Services Asia Pte Ltd,Safran Singapore"
},
{
id:"3",
date:"Aug-2008",
titletwo:"Boeing B737 Next Generation Main Landing Gear Training. Theory of operation, fault analysis and maintenance practices",
description:"Course done at Messier Services Asia Pte Ltd,Safran Singapore"
},
{
id:"4",
date:"Feb-2009",
titletwo:"	Airbus A300/A310 Nose and Main Landing Gear Product Knowledge and Maintenance Programs",
description:"Course done at Messier Dowty, Safran, Singapore"
},
{
id:"5",
date:"Jul-2009",
titletwo:"Airbus A319,A320,A321,A330,A340 Main Landing Gear theory of operation, fault analysis and maintenance practices",
description:"Course done at Messier Dowty, Safran, Singapore"
},
{
id:"6",
date:"Jul-2009",
titletwo:"CCAR 145 Training",
description:"Course done at Messier Services Asia Pte Ltd,Safran Singapore"
},
{
id:"7",
date:"Nov-2009",
titletwo:"Airbus A340/200/300 Series Centerline Gear Product Knowledge, service and maintenance training",
description:"Course done at Messier Dowty,Singapore"
},
{
id:"8",
date:"Mar-2009",
titletwo:"SAR 145",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"9",
date:"Apr-2010",
titletwo:"EASA PART 145",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"10",
date:"Jun-2013",
titletwo:"Lean Sigma White Belt Training",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"11",
date:"Sep-2013",
titletwo:"Flight Safety Management System",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"12",
date:"Aug-2014",
titletwo:"Human Factors and Error Management",
description:"Course done at Association of Aerospace Industries, Singapore"
},
{
id:"13",
date:"Sep-2014",
titletwo:"Root Cause Analysis Workshop",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"14",
date:"Oct-2014",
titletwo:"	Lean Sigma Manager Belt",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"15",
date:"Mar-2015",
titletwo:"Supply Planning in Practice - Oliver Wight",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"16",
date:"July-2015",
titletwo:"Lean Sigma Green Belt",
description:"Course done at Safran Corporate University, Singapore"
},
{
id:"17",
date:"Aug-2015",
titletwo:"Leadership Development Workshops for Managers",
description:"Course done at Safran Landing Systems, Singapore"
},
{
id:"18",
date:"July-2015",
titletwo:"MF-LSC-405C-1 Apply Techniques in Supply Chain Management",
description:"Course done at SMF center for Corporate Learning Pte. Ltd"
},
{
id:"19",
date:"Jul-2017",
titletwo:"Creative Problem Solving Training",
description:"Course done at Professional Development Training-Singapore"
},

]



function SafranCertiicateComp(){
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
       <div className='text-center'> <a className='text-4xl text-gray-900  '>Trainings in Singapore</a></div>
    <VerticalTimeline className='bg-transparent'>

    {trainingData.map((training) => (
      <VerticalTimelineElement key={training.id} className="vertical-timeline-element--work" date={training.date}
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#718096' }}
      icon={<img className="w-12 h-12 m-auto" src="img/mlion.png" alt="No image"/>}>
     <CardComponent  Titletwo={training.id+"."+training.titletwo}
     description={training.description}  bgclr={bgclr} txclr='#fff'/>
    </VerticalTimelineElement>

  
  ))}
     </VerticalTimeline>

        </div>
    )
    

};

export default SafranCertiicateComp;
