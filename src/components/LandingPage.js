import React from 'react';

import ACOFacts from "./ACOFacts";
import AboutUs from './sections/AboutUs';
import ProjectsSection from './sections/ProjectsSection';
import Donation from './sections/Donation';
import JoinUs from './sections/JoinUs';

const LandingPage = props => {
    return (
        <>
            <AboutUs setCurrentSection={props.setCurrentSection}
                     label={props.label}
            />
            <ACOFacts label={props.label}/>
            <ProjectsSection setCurrentSection={props.setCurrentSection}
                             label={props.label}/>
            <Donation setCurrentSection={props.setCurrentSection}
                      label={props.label}/>
            <JoinUs setCurrentSection={props.setCurrentSection}
                    label={props.label}/>
        </>
    );
};

export default LandingPage;
