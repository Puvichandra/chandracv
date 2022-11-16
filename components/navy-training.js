import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CardComponent from './cardscomp';
import { useEffect, useState } from 'react';



function NavyCertiicateComp(){
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
       <div className='text-center'> <a className='text-4xl text-gray-900  '>Trainings in Indian Navy</a></div>
    <VerticalTimeline className='bg-transparent'>
    <VerticalTimelineElement className="vertical-timeline-element--work" date="1986 July- 1986 Dec"
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#718096' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="no Image"/>}>
     <CardComponent  Titleone="INS Chilka, Orissa" Titletwo="Basic Training" imghead='/img/inschilka.png' 
     description="This was the first and the very basic training for every recruit who joins in the Indian Navy. 
     The duration period was 24 weeks. This training covered physical, mental and weapon training." bgclr={bgclr} txclr='#fff'/>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="1986-2001"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="no Image"/>}
    >
    <CardComponent  Titleone="INS Vikrant, Mumbai" Titletwo="Ship Training" imghead='/img/Vikrant.png' 
    description="The next one was ship training. I was transferred to INS Vikrant for ship training for the duration of 08 weeks.
     It was a wonderful and  exciting period. As a trainee, I invloved almost all the activities in the ship. We sailed for a month and took part in, 
     the war exercise carried out while sailing. I can't forget working along with deck creaws and witnessing Alize, Sea Harrier aricrafts take off and Landings" bgclr={bgclr} txclr={txclr} />
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="1987 & 1991"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="no Image"/>}
    >
    <CardComponent  Titleone="School For Naval Aviation, Kochi" Titletwo="Professional Training" imghead='/img/safna.png' 
    description={<div><p className='font-bold text-8xl'>Twice Trained during 15 years tenure</p>
    <p className='pb-2'>It is a four week course and taught about general non technical aspects like airport symbols, marshalling, safety zone and safety equipments.</p>
    <ol>
        <li>1987- attended 04 weeks training</li>
        <li>1991- attend 04 weeks training prior to Leading Aircraft Mechanic course</li>
    </ol>
    </div>}
     bgclr={bgclr} txclr={txclr} />
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="1987 & 1991 & 1998"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="no Image"/>}
    >
    <CardComponent  Titleone="Naval Institute of Aeronautical Technology, INS Garuda, Kochi" Titletwo="Courses done here for Naval Aircraft Mechanic(1987),
Leading Aircraft Mechanic(1991), Chief Petty Officer Air Fitter(1998)" imghead='/img/niat.png' 
    description={<div><p className='pb-2'>This is our parent training unit for all air technical professional trainings.
     I was allocated B stream, which covers basic aerodynamics, propulsion, materials, power assisted 
     systems theory along with Alize, SeaHarrier, Islander and Chetak aircraft familiarisation. 
     </p>
    <ol>
        <li> Naval Aircraft Mechanic - Course- 24 weeks</li>
        <li>Leading Aircraft Mechanic- Course- 24 weeks</li>
        <li>Chief Petty Officer AirFitter Course-12 weeks</li>
    </ol>
    </div>}
     bgclr={bgclr} txclr={txclr} />
    </VerticalTimelineElement>


    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{  background: '#a0aec0', width:{widthComp}, color: '#1a202c'}}
      contentArrowStyle={{ borderRight: '10px solid  #1a202c' }}
      date="1987 & 1991 & 1998"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
      icon={<img className="w-12 h-12 m-auto" src="img/navyicon.png" alt="no Image"/>}
    >
    <CardComponent  Titleone="INS Agrani, Coimbatore" Titletwo="Leadership Course" imghead='/img/Insagrani.png' 
    description={<div><p className='pb-2'>It was a 04 week course and one had to qualify this Leadership training 
    conducted by INS Agrani to get promted as Chief Petty officer Air Fitter. I completed this training in 1998
     </p>
   
    </div>}
     bgclr={bgclr} txclr={txclr} />
    </VerticalTimelineElement>

    
     </VerticalTimeline>

        </div>
    )
    

};

export default NavyCertiicateComp;
