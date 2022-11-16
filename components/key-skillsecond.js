
import classes from "./keyskillsecond.module.css"
import React from "react";
const Filler = props => {
    return (
      <div
        className={classes.filler}
        style={{ width: `${props.percentage}%`}}
      />
    );
  };
  
  // ----------------------------------
  // ----- PROGRESS BAR COMPONENT -----
  // ----------------------------------
  class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        percentage: 0
      };
    }
  
    render() {
      return (
        <div className={classes.progressbar}>
          <div className={classes.percentage}>{`${this.props.percentage}%`}</div>
          <Filler percentage={this.props.percentage} />
        </div>
      );
    }
  }
  
  // ---------------------------------
  // ----- BAR DISPLAY COMPONENT -----
  // ---------------------------------
  const programmingLanguages = [
    { type: 'HTML', percentage: 75,Id:1 },
    { type: 'CSS/Sass', percentage: 75 ,Id:2},
    { type: 'Java', percentage: 50,Id:3 },
    { type: 'JavaScript', percentage: 70,Id:4 },
    { type: 'SQL', percentage: 60,Id:5 },
    { type: 'Swift', percentage: 50,Id:6 }
  ];
  
  function renderBars() {
      return _.map(programmingLanguages, language => {
          return (
              <div className={classes.barcontainer}>
                  <p className={classes.skilltitle}>
                      {language.type}
                  </p>
                  <ProgressBar percentage={language.percentage} />
              </div>
          );
      });
  }
  
  const ProgrammingLanguageBars = () => {
    return (
      <div className={classes.container}>
              <h2 className={classes.title}>Programming Languages</h2>
        {renderBars()}
      </div>
    );
  };
  
  // Render the component
export default ProgressBar;