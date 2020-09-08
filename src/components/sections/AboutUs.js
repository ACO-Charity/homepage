import React from 'react';
import pages from '../../enums/pages';
import BasicSection from '../common/BasicSection';
import {isWebpSupported} from "react-image-webp/dist/utils";

const AboutUs = props => {
    return (
        <BasicSection
            setCurrentSection={props.setCurrentSection}
            sectionId={pages.ABOUT_US}
            sectionImage={isWebpSupported() ? require('../../img/section_about.webp') : require('../../img/section_about.jpg')}
            sectionTitle={props.label[pages.ABOUT_US]}>
            <p>{props.label.ABOUT_SECTION_TEXT}</p>
            <p>{props.label.ABOUT_SECTION_TEXT_2}</p>
            <p>{props.label.ABOUT_SECTION_TEXT_3}</p>
            <div className="d-flex align-items-center justify-content-center">
                <div className="about-core-box d-flex align-items-center justify-content-center flex-column mt-5">
                    <p>{props.label.ABOUT_SECTION_TEXT_CORE_1}</p>
                    <p>{props.label.ABOUT_SECTION_TEXT_CORE_2}</p>
                    <p>{props.label.ABOUT_SECTION_TEXT_CORE_3}</p>
                </div>
            </div>
        </BasicSection>
    );
};

AboutUs.propTypes = {};

export default AboutUs;
