
const keyskills=[
    {
        skill:"Management:",
        percentage:"75",
       },
       
       {
        skill:"Supply Chain:",
        percentage:"80",
       },
       
       {
        skill:"Production Planning:",
        percentage:"90",
       },
       {
        skill:"Microsoft Proficiency:",
        percentage:"90",
       },
       {
        skill:"Lean Principles:",
        percentage:"90",
       },
       {
        skill:"Digital Transformation:",
        percentage:"80",
       },
       {
        skill:"Team Building:",
        percentage:"80",
       },
       {
        skill:"Problem Solving:",
        percentage:"85",
       },
]


function Keyskillsprogressbar(props){
    return(
        
<div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

      
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 bg-white">

          
            <article className="overflow-hidden rounded-lg shadow-xl border-2">

            <div className='flex flex-row flex-wrap item-center py-4'>
            {keyskills.map((x)=>(
               <>
            <div className="basis-3/6 pl-8">
            <div> {x.skill}</div>
            </div>
            <div className="basis-2/6">
            <div className="bg-blue-600 text-xs font-medium text-blue-100   p-0.5 leading-none  rounded-l-full w-full  ml-8 pl-32 inline " > {x.percentage}%</div>
            </div>
            </>

            )) }
           
          

            </div>

           


       

            </article>
       

        </div>


    



    </div>
    </div>



     
    );
}

export default Keyskillsprogressbar;