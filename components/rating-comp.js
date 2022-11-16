import ReactStars from 'react-stars';

const langSkill=[
{
id:1,
Language:"Tamil(Mother Tonque)",
Typeone:"Read",
ReadValue:"5",
Typetwo:"Write",
writeValue:"5",
Typethree:"Speak",
speakValue:"5",
},
{
id:2,
Language:"English",
Typeone:"Read",
ReadValue:"4",
Typetwo:"Write",
writeValue:"4",
Typethree:"Speak",
speakValue:"4",
},
{
id:3,
Language:"Hindi",
Typeone:"Read",
ReadValue:"1",
Typetwo:"Write",
writeValue:"1",
Typethree:"Speak",
speakValue:"3",
},
{
id:4,
Language:"Malayalam",
Typeone:"Read",
ReadValue:"0",
Typetwo:"Write",
writeValue:"0",
Typethree:"Speak",
speakValue:"2",
},     
]

function RatingStars() {
   

    return(
        // <div className='w-full bg-gray-900 py-10'>
        <div className='w-full h-full bg-cover bg-no-repeat bg-fixed -mt-28' style={{backgroundImage:`url(/img/wall.jpg)`}}>
         <div className='text-center py-4'> <a className='text-4xl text-black  '> Language Skills</a></div>
        
        <div className='md:border-4 border-cyan-900 rounded-3xl m-12 shadow-red-800 bg-gray-800 opacity-80'>
        <div className='flex flex-row flex-wrap mt-8 md:p-20 gap-2 w-11/12 items-stretch mx-auto justify-center '>
        {langSkill.map((x)=>(
            <div key={x.id} className='basis-full only:md:basis-full lg:basis-full xl:basis-1/5 2xl:basis-2/12 mx-auto border-2 rounded-3xl shadow-2xl shadow-red-800'>
            <div >
            <div className='mt-8 px-4'>

       <div className='text-center text-2xl text-white pb-10'> {x.Language}</div> 
       <div className="inline px-10 text-white"> 
       <p className='text-xl font-bold'>{x.Typeone}</p>
       
       <ReactStars   count={5}  
       size={24}   color2={'#ffd700'} value={x.ReadValue}/>
       </div>
        
       <div className="inline px-10 text-white"> 
       <p className='text-xl font-bold'>{x.Typetwo}</p>
       
       <ReactStars   count={5}  
       size={24}   color2={'#ffd700'} value={x.writeValue}/>
       </div>

       <div className="inline px-10 text-white text-xl font-bold"> 
       <p className='text-xl font-bold'>{x.Typethree}</p>
       
       <ReactStars   count={5}  
       size={24}   color2={'#ffd700'} value={x.speakValue}/>
       </div>
     
      </div>
      </div>
      </div>))}
      </div>
      </div>
      </div>
      
    );
}

export default RatingStars;