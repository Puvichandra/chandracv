import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import degree from "../public/img/degree.png"
import { useEffect, useState } from 'react';



function NavyTrainingComp(){
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

      
        <div className='bg-gray-900'>
       <div className='text-center'> <a className='text-4xl text-white  '> Work Experience in Indian Navy</a></div>
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color:"#718096"}}
      contentArrowStyle={{ borderRight: '10px solid  rgb(255,255,255)' }}
      date="1987-1980"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/experience.png"  alt="no Image"/>}
    >
    <CardComponent  Titleone="Indian Naval Air Squadron-550,INS Garuda, Kochi, India" Titletwo= "Front Line Crew - Rank: Naval Aircraft Mechanic II/Naval Aircraft Mechanic I" imghead="img/islander.png"  description={`Workscope:\n  Before Flight Servicing, Turn Roumd Servicing,After Flight Servicing,50 Hrs, 
    100 Hrs Inspection,Change of Configuration as per role,Defect Investigation/ Defect Rectification`} bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="1991-1992"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="no Image"/>}>
      <CardComponent  Titleone="Indian Naval Air Squadron-561,INS Garuda, Kochi, India" 
      Titletwo= "Front Line Crew - Rank: Naval Aircraft Mechanic I/Lead Aircraft Mechanic" 
      imghead="img/nas561.png"  
      description="Workscope: Before Flight Servicing, Turn Roumd Servicing, After Flight Servicing, 50 Hrs, 100 Hrs Inspection, Change of Configuration as per role,Defect Investigation/ 
      Defect Rectification" bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="1992-1998"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No Image"/>}>
      <CardComponent  Titleone="INS Rajali/Air Engineering Department, Arakkonam,Tamilnadu, India" 
      Titletwo= "Base Maintenance - Rank: Leading Aircraft Mechanic/Aircraft Supervisor" 
      imghead="img/Rajali.png"  
      description="Workscope: 800 Hrs Inspection, Entire A/C disassembly, Inspection, repair, parts replacement and assembly Flight Controls Rigging Vibrometer analysis" bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="1998-2000"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="no Image"/>}>
      <CardComponent  Titleone="Indian Naval Air Squadron -321, Naval Air Station(Uchipuli), Ramanathapuram, India" 
      Titletwo= "Front Line Supervisor - Rank: Petty Officer Air Fitter(Aircraft Maintenance Supervisor)" 
      imghead="img/Insparunthu.png"  
      description="This was a very remote airbase with limited facilities and resources. I was a one among the Chetak aircraft maintenance crew of INAS-321, posted there to support operation for 02 years. There my role was Aircraft maintenance Supervisor" bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="2000-2001"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="no Image"/>}>
      <CardComponent  Titleone="Naval Aircraft Yard, Pegasus Engine Repair Overhaul Facility, Kochi, India" 
      Titletwo= "Front Line Supervisor - Rank: Petty Officer Air Fitter(Aircraft Maintenance Supervisor)" 
      imghead="img/Nayk.png"  
      description="Pegasus engine is from ROLLS ROYCE, fitted in Sea Harrier aircraft,  deisigned  
      to take off and land verticaly by its vectored thrust nozzle.
       I was part of production control team to check all the engine log card, create job card, 
       maintaining all engine components life data and it's tools." bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>
     </VerticalTimeline>

        </div>
    )
    

};

export default NavyTrainingComp;