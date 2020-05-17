import React from 'react';
import Fade from 'react-reveal/Fade';

const BasicSection = props => {
    return (
        <section id={props.sectionId}>
            {
                props.sectionImage &&
                    <div className="section-image-container" style={{backgroundImage: 'url(' + props.sectionImage +')'}}>
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
    );
};

export default BasicSection;