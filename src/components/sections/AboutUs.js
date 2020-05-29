import React from 'react';
import pages from '../../enums/pages';
import BasicSection from '../common/BasicSection';
import {isWebpSupported} from "react-image-webp/dist/utils";

const AboutUs = props => {
    return (
        <BasicSection
            setCurrentSection={props.setCurrentSection}
            sectionId={pages.ABOUT_US}
            sectionImage={isWebpSupported()? require('../../img/section_about.webp') : require('../../img/section_about.jpg')}
            sectionTitle={props.label[pages.ABOUT_US]}>
            <p>{props.label.ABOUT_SECTION_TEXT}</p>
        </BasicSection>
    );
};

AboutUs.propTypes = {};

export default AboutUs;
