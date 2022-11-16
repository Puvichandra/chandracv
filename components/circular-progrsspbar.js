import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
function CircleProgressBar(props){
    const percentage = props.percentage
    
    return (
<div className=" p-10">
<div className="text-2xl text-black text-center font-bold mx-auto pb-2"> {props.headTitle}</div>
  
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
       

</div>
 

    );
}

export default CircleProgressBar;