
import classes from "./keyskillsecond.module.css"
const keyskills=[
    {
        id:1,
        skill:"Management",
        percentage:"75",
       },
       
       {
        id:2,
        skill:"Supply Chain",
        percentage:"80",
       },
       
       {
        id:3,
        skill:"Production Planning",
        percentage:"90",
       },
       {
        id:4,   
        skill:"Microsoft Proficiency",
        percentage:"90",
       },
       {
        id:5,   
        skill:"Lean Principles",
        percentage:"90",
       },
       {
        id:6,
        skill:"Digital Transformation",
        percentage:"80",
       },
       {
        id:7,
        skill:"Team Building",
        percentage:"80",
       },
       {
        id:8,
        skill:"Problem Solving",
        percentage:"85",
       },
]

function ProgressbarSkill(){

  
    


    return (
          
            <div className="mx-auto w-full overflow-hidden rounded-lg text-center shadow-xl border-2 p-10">
          
            {keyskills.map((language)=>(
                
                <div key={language.id}className={classes.barcontainer}>
                  <p className={classes.skilltitle}>
                      {language.skill}
                  </p>

                  <div className={classes.progressbar}>
                 <div className={classes.percentage}>{`${language.percentage}%`}</div>

                 <div
                 className={classes.filler}
                 style={{ width: `${language.percentage}%`}}
                 />

                 </div>

                  
              </div>

            ))}
        
              </div>

        
    );
}

export default ProgressbarSkill;