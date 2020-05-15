import React from 'react';
import Fade from 'react-reveal/Fade';

const BasicSection = props => {
    return (
        <section id={props.sectionId}>
            <Fade bottom>
                <div className="container jumbotron">
                    {props.children}
                </div>
            </Fade>
        </section>
    );
};

export default BasicSection;