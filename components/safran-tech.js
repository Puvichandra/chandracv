import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import degree from "../public/img/degree.png"
import { useEffect, useState } from 'react';



function Safrantechnician(){
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
        <div className='text-center  py-8'> <a className='text-xl xl:text-4xl text-white '>Experience at Safran Landing Gear Systems(MRO) </a></div>
    
       <div className='text-center  py-8'> <a className='text-lg xl:text-2xl text-white '>Qualified in following Commercial A/C Landing Gears </a></div>
       <div className='flex w-11/12 flex-row flex-wrap justify-center mx-auto px-10 py-10 gap-4 border-8 border-white rounded-xl  '>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="A320 MLGs" imghead="img/320main.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="A330 MLGs " imghead="img/A330.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="B737NG MLGs" imghead="img/737ng.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="B747 BLGs & WLGs" imghead="img/747bodywlg.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="B777-MLGs" imghead="img/b777.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="CRJ MLGs" imghead="img/CRJ.png"   bgclr="#fff" txclr="#718096" />
       </div>
       <div className='xl:basis-1/4'>
       <CardComponent  Titleone="Dash-8 MLGs" imghead="img/dash8.png"   bgclr="#fff" txclr="#718096" />
       </div>
      
       </div>

        <div className='border-2 rounded-2xl m-4'>
       <div className='text-center mt-4   w-full lg:py-4 lg:mx-28 xl:mx-2 lg:mt-8 text-lg px-8 bg-transparent md:text-4xl shadow-xl  text-white rounded-2xl xl:px-10 py-5'>On hand experience in the following Processes</div>
       <div className='flex flex-row flex-wrap  gap-2 w-11/12  mx-auto p-2 md:p-10 text-justify justify-center items-stretch'>
       
       <div className="md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-1/4 ">
       <CardComponent  Titleone="Disassembly:"  description={<p>The entire landing gear or Piece parts are disassembled 
       according to the CMM(Component Maintenance Manual) instructions. Most of the parts will go for paint stripping followed by blasting 
       machine to remove paints. The process router are extracted process/work instructions from CMM, are customised in a way to a group of            
       parts or a single part(if a part is big and required to branch out to follow unique repair in its subsequent process). These process routers           
       are printed out with unique job number and attach with part and send across to different process shops like, baking, product verification or            
       Non Destructive Testing etc... based on router workflow </p> }bgclr="#fff" txclr="#718096" />
       </div>

       <div className="md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-1/4 ">
       <CardComponent  Titleone="Inspection:"  description={<p>Each router has additional sheets called Inspection Condition Report
       which is the extraction from the CMM data, specific to the part of the router which is attached. It calls technician to measure 
       certain dimension of the part using precison tools like micrometers, vernier calipers, dial bore gauge etc and to be recorded in
        the ICR Sheet. Technician need to corelate CMM along with ICR sheet to have further clarity. In the case of pitting(corrosion) 
        need to direct the part for machining for major rework and some are to be cleared with hand held blenders. Some parts after rework
         need to go for concession(OEM Approval) incase if the rework limit is exceeded the CMM limitations. So it requires more technical 
         knowledge to route the part for further process, if rework need to be carried out...</p> }bgclr="#fff" txclr="#718096" />
       </div>

       <div className="md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-1/4">
       <CardComponent  Titleone="Bush Sizing:"  description={<p>The most of the landing gear pivot joints are provided with bush. Basically it 
       makes cost effective to repair landing gear parts only by changing bushes. The technician plays a vital role in sizing bushing. The bush 
       dimension need to be precisely sized, based on wear and tear of the parts joints or based on the rework dimension. All these bushes are 
       installed in the component using heat & Shrink method. Once the bush sizing is done it should be sent inhouse machine shop(must have approval to fabricate)
        or outhouse approved machine shop.(approved vendor) </p> }bgclr="#fff" txclr="#718096" />
       </div>

       <div className="md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-1/4">
       <CardComponent  Titleone="Bushing & Honing:"  description={<p>  This section in Safran we call it as Pre-Assembly.Here the bushing and 
       honning process is done after completion of major process like rework,plating etc.. but prior to painting. By the time the pre-assembly 
       section receive all the sized bushing kept ready to install on the part. Most of the bushes are installed using heat shrink method( shrink by liquid Nitrogen).
       Once bush installed all the crevices between bush flange and part are need to be sealed using proper sealant. </p> }bgclr="#fff" txclr="#718096" />
       </div>

       <div className="md:basis-full lg:basis-full xl:basis-1/4 2xl:basis-1/4">
       <CardComponent  Titleone="Assembly:"  description={<p>  Final Assembly Though I have worked in all the section, I like doing assembly always.
        Check all the parts are completed all the required process and file the routers separately. All the painted items, new items, spares, consumables 
        are collected and segregated module wise. Then start assembling shock strut & do pressure test. Rest of assembling like side stay, Lock stay and main 
        fitting goes on concurrently. Electric wiring isntallation,continuity check and setting proximity sensors & Testing lubricating joints, finalising loose 
        items and additional items and place it on the shipping crate. Concurrently sign all the job cards for the job carried out. Finally the whole paper work
         submit to the Certifying staff for cerification.(ARC-Authorised Release Certificate) </p> }bgclr="#fff" txclr="#718096" />
       </div>
           
       </div>
       </div>
       <div className='text-center mt-4   w-full lg:py-4 lg:mx-28 xl:mx-2 lg:mt-8 text-lg px-8 bg-transparent md:text-4xl shadow-xl  text-white rounded-2xl xl:px-10 py-5'>Positions held in Safran(2005-2018) </div>
      
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color:"#718096"}}
      contentArrowStyle={{ borderRight: '10px solid  rgb(255,255,255)' }}
      date="Aug 2016 – Aug 2018"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No image"/>}
    >
    <CardComponent  Titleone="Process Analyst- Digital transformation Team" Titletwo= "Workscope"   
    description={<div><p>Analyzed multiple disparate data sets to analyze predict costing, staffing and 
    revenue generation. Proactively designed and automated reporting system to expedite operational
     reporting. Standardized process, data and metrics to identify operational shortcomings.</p>
     <p className='text-xl font-bold pb-2'>Personally Developed Applications (includes coding VB.net- Front end, Mssql server, MS Access- Back end):</p>
     <ul className='pl-2'>

     <li>•	A dynamic database driven ‘Rough Cut Capacity Planning’ application has been designed, developed and implemented. </li>
     <li>•	Integrating newly designed processes flow from Marketing to Operations, to automate Master Production Schedule, Material Resource Planning by integrating existing material status in the inventory.</li>
     <li>•	Developed Digital Production Planning Control Visual board to monitor progress of individual Products. </li>
     <li>•	Developed and implemented automated quotation generator by integrating all the  Work Scope, Service Bulletin, Service Letters, Material and Labour cost.</li>
     </ul></div>
     }
     bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="Aug 2014 – Aug 2016"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No image" />}>
      <CardComponent  Titleone="Production Manager-Distribution" 
      Titletwo= "Roles &  Responsibilities" 
      description={<div>
     <ul className='pl-2'>

     <li>•	Leadership in communicating and facilitating team members towards alignment with business goals, Company Policies & regulations, policy deployment targets, work processes and other tasks.</li>
     <li>•	Leadership to assigned personnel and to manage their performance and productivity including appraisals, development, absence, overtime, holidays, disciplinary adherence.</li>
     <li>•	Responsible for the process of Kitting, Final Assembly, Delivery Reports and Airworthiness certificates for its  on-time delivery & quality in a lean manner using policy deployment and continuous improvement. </li>
     <li>•	Responsible Master Production Schedule, Material Resource Planning and Inventory.</li>
     <li>•	Ensure value streams are in compliance with Lean Sigma practices, HSE, Ergonomics, best practices and group level policies.</li>
     <li>•	Leadership in 6S, QRQC(Quick Response Quality Control), Kaizen events, Flow Leader Forum Projects, System Corrective Action Request(SCAR), Eight Disciplines(8D) problem solving and Lean Sigma tools application to identify root cause & implement preventive action in quality escapes.</li>
     <li>•	Technical Leadership & guidance to workshop personnel to ensure all works meets quality & Air worthiness directives requirements.</li>
     <li>•	Escalating Technical issues if any to Customer and updating weekly progress reports to Customer.</li>
     </ul></div>
     }
     bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="Aug 2013 – Aug 2014"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No image"/>}>
      <CardComponent  Titleone="Flow Manager" 
      Titletwo= "Roles &  Responsibilities"       
      description={<div>
     <ul className='pl-2'>

     <li>•	Leadership in communicating and facilitating team members towards alignment with business goals, Company Policies & regulations, policy deployment targets, work processes and other tasks.</li>
     <li>•	Responsible for the process of Disassembly, NDT, Product verification, Plating, Machine Shop, Pre-assembly  for its  on-time delivery & quality in a lean manner using policy deployment and continuous improvement.</li>
     <li>•	Mobilize resources  from various teams pertaining to the repair/overhaul of landing gears and related components.</li>
     <li>•	Ensure value streams are in compliance with Lean Sigma practices, HSE, Ergonomics, best practices and group level policies.</li>
     <li>•	To Manage cost, OEE(Overall Equipment Effectiveness), optimized working capital and on-time delivery plan.</li>
     <li>•	Leadership in 6S, QRQC(Quick Response Quality Control), Kaizen events, Flow Leader Forum Projects, System Corrective Action Request(SCAR), Eight Disciplines(8D) problem solving and Lean Sigma tools application to identify root cause & implement preventive action in quality escapes.</li>
     <li>•	Technical Leadership & guidance to workshop personnel to ensure all works meets quality & Air worthiness directives requirements.</li>
     
     </ul></div>
     }
     bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="Nov 2010 – Aug 2013"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No image" />}>
      <CardComponent  Titleone="Production Planner" 
      Titletwo= "Roles and Responsibilities"       
      description={<div>
     <ul className='pl-2'>
     <li>•	(Prior to Split into Value Streams.)</li>
     <li>•	Responsible for overall Master Production Schedule planning of all Airbus/Boeing landing gears and piece parts of A319, A320, A321, A330, A340, B737 Classic, B737 NG, B747 * series, B777 and Dash8.</li>
     <li>•	Responsible for on-time delivery of gear and weekly progress report to the customer. </li>
     <li>•	Conducting Weekly production meeting and update Customer service if any challenges.</li>
     <li>•	Quote Man hours and Material cost of repair gears.</li>
     <li>•	Responsible for OT man power allocation.</li>        
     </ul></div>
     }
     bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>

    <VerticalTimelineElement className="vertical-timeline-element--work" date="Aug 2005-Nov 2010"
      contentStyle={{  background: 'rgb(255,255,255)', width:{widthComp}, color: "#718096"}}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
       icon={<img className="w-12 h-12 m-auto" src="img/experience.png" alt="No image" />}>
      <CardComponent  Titleone="Aircraft Technician 1/ Lead Technician " 
      Titletwo= "Roles and Responsibilities"  
     
description={<div>
     <ul className='pl-2'>
     <li>•	2005-2010 Aircraft Technician/Lead Aircraft Technician worked in Disassembly, Product Verification, Pre-Assembly, Kitting and Assembly process for all landing gears of B737, B737 NG, A300,A319,A320, A321, A330, B747, B777, DC10, CRJ and DHC-8.</li>
     <li>•	Product Verification: Inspect parts dimension per Components Maintenance Manual wear limit, and if exceeds assign appropriate repair process. Re Inspect the components are routed through correct process and correct parameters are followed in each process. Collaborate with product engineers to get concession from OEM for the exceeded wear limits. Advice customer service with justification incase if part needs to be changed. Size bushing to the required size for fabrication and ordering required spares related to repair process.</li>
     <li>•	Pre Assembly:  Install bushes in hot shrink method and ream or machine bushes to the required sizes.  </li>
     <li>•	Kitting: Ensure all the process are carried out properly, and check part number and serials numbers are appropriate and mark it in each and individual part with relevant repair number and concession number. Segregate parts per module wise and send to final assembly. Accountable for all the process routers and prepare it for certification.</li>
     <li>•	Assembly: Build the Landing gear per technical instruction in Components Maintenance Manual, test it for the correct functionality.</li>
             
     </ul></div>
     }
     bgclr="#f7fafc" txclr="#718096" />
    </VerticalTimelineElement>
     </VerticalTimeline>

    </div>
    )
    

};

export default Safrantechnician;