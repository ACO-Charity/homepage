import React from 'react';
import Fade from 'react-reveal/Fade';
import VisibilitySensor from "react-visibility-sensor";

const BasicSection = props => {

    const revealed = (sensorData) => {
        if (sensorData) {
            props.setCurrentSection(props.sectionId);
        }
    };

    return (
        <VisibilitySensor onChange={revealed}
                          partialVisibility={true}
                          offset={{
                              top: 500,
                              bottom: 500
                          }}
                          minTopValue={200}>
            <section id={props.sectionId}>
                {
                    props.sectionImage &&
                    <div className="section-image-container" style={{backgroundImage: 'url(' + props.sectionImage + ')'}}>
                    </div>
                }
                <Fade clear>
                    <div className="section-content container jumbotron">
                        <div className="section-title">
                            <h2 className="title-shadow text-center">{props.sectionTitle}</h2>
                            <h2 className="title-text text-center">{props.sectionTitle}</h2>
                        </div>
                        <hr/>
                        {props.children}
                    </div>
                </Fade>
            </section>
        </VisibilitySensor>
    );
};

export default BasicSection;
