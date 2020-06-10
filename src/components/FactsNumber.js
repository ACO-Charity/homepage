import React from 'react';
import { Spring } from "react-spring/renderprops";

const FactsNumber = props => {

  return (
    <div className="fact-num">
      <Spring
        delay={400}
        config={{ duration: 800 }}
        unit={props.unit}
        from={{ number: 0 }}
        to={{ number: props.num }}>
        {springProps => <p className="fact-num-val">{Math.floor(springProps.number)} {props.unit}</p>}
      </Spring>
      <p className="fact-num-text">{props.text}</p>
    </div>
  );
};

export default FactsNumber;
