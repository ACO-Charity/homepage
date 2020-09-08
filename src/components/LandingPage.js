import React from 'react';

import ACOFacts from "./ACOFacts";
import pages from "../enums/pages";
import AboutUs from './sections/AboutUs';
import BasicSection from "./common/BasicSection";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import ProjectsSection from './ProjectsSection';

const LandingPage = props => {
    return (
        <>
            <AboutUs setCurrentSection={props.setCurrentSection}
                     label={props.label}
            />
            <ACOFacts label={props.label}/>
            <ProjectsSection setCurrentSection={props.setCurrentSection}
                             label={props.label}/>
            <BasicSection sectionId={pages.DONATION}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported() ? require('../img/section_donate.webp') : require('../img/section_donate.jpg')}
                          sectionTitle={props.label[pages.DONATION]}>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
            </BasicSection>
            <BasicSection sectionId={pages.JOIN_US}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported() ? require('../img/section_join.webp') : require('../img/section_join.jpg')}
                          sectionTitle={props.label[pages.JOIN_US]}>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
                <p> aksöldksaldsaöld</p>
                <p>asdkölsakdölsakd</p>
                <p>sadölsak</p>
            </BasicSection>
        </>
    );
};

export default LandingPage;
