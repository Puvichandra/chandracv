import { useState } from "react";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';




function CardComponent(props){
    const Titleone = props.Titleone;
    const Titletwo = props.Titletwo;
    const description = props.description;
    const imghead = props.imghead;
    const [ispic, setIspic]=useState(false);
    const [isbut, setIsbut]=useState(false);
    const [islink, setIsLink]=useState(false);
    const btnCaption = props.btnCaption;
    const bgclr=props.bgclr;
    const txclr=props.txclr;
 

    useEffect(()=>{
        if (imghead){
            setIspic(true)
        }
        if (btnCaption){
          setIsbut(true)
         
      }
      if(props.linkdata) {
        setIsLink(true)
      }
    },[])
return (
<div className="max-w-md rounded-4xl overflow-hidden shadow-lg text-center mx-auto h-full" style={{backgroundColor:bgclr, color:txclr }} >
  {ispic ?   <img className="w-full mx-auto rounded-t-2xl" src={imghead} alt="Sunset in the mountains"/> : null}
  <div className="px-6 py-4">
    <div className="font-bold text-xl  mb-2 text-left" style={{ color:{txclr} }}>{Titleone}</div>
    <div className="font-bold text-md  mb-2 text-left" style={{ color:{txclr} }}>{Titletwo}</div>
    
    <div className=" text-base text-left" style={{ color:{txclr} }}>
      {description}
    </div>
  </div>
  <div className="px-6 pt-4 pb-2">
    {isbut ? islink?<Link href={props.linkdata}><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{btnCaption}</span></Link>:
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{btnCaption}</span>   : null }
    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
  </div>
  </div>
);
}

export default CardComponent;