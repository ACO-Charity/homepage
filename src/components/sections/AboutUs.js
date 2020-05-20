import React from 'react';
import pages from '../../enums/pages';
import aboutSectionImage from '../../img/section_about.jpg';
import BasicSection from '../common/BasicSection';

const AboutUs = props => {
    return (
        <BasicSection
            setCurrentSection={props.setCurrentSection}
            sectionId={pages.ABOUT_US}
            sectionImage={aboutSectionImage}
            sectionTitle={props.label[pages.ABOUT_US]}>
            <p>{props.label.ABOUT_SECTION_TEXT}</p>
        </BasicSection>
    );
};

AboutUs.propTypes = {};

export default AboutUs;
