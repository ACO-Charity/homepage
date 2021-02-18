import React from 'react';
import pages from '../../enums/pages';
import {isWebpSupported} from "react-image-webp/dist/utils";
import languages from '../../enums/languages';
import BasicSection from '../common/BasicSection';

const ProjectsSection = props => {
    const sectionImage = isWebpSupported() ? require('../../img/section_projects.webp') : require('../../img/section_projects.jpg')

    return (
        <BasicSection sectionId={pages.PROJECTS}
                      setCurrentSection={props.setCurrentSection}
                      sectionImage={sectionImage.default}
                      sectionTitle={props.label[pages.PROJECTS]}>
            <p>{props.label.PROJECT_SECTION_TEXT}</p>

            <h3 className="mt-5">{props.label.PROJECT_BIEN_HOA_TITLE}</h3>
            <p>{props.label.PROJECT_BIEN_HOA_TEXT_1}</p>
            <p>{props.label.PROJECT_BIEN_HOA_TEXT_2}</p>

            <h3 className="mt-5">{props.label.PROJECT_HLT_TITLE}</h3>
            <p>{props.label.PROJECT_HLT_TEXT_1}</p>

            <h3 className="mt-5">{props.label.PROJECT_VS_TITLE}</h3>
            {
                props.selectedLanguage === languages.DE &&
                <p className="text-center mt-5 mb-5"><i>{props.label.PROJECT_VS_QOUTE}</i></p>
            }
            <p>{props.label.PROJECT_VS_TEXT_1}</p>
            <p>{props.label.PROJECT_VS_TEXT_2}</p>
        </BasicSection>
    );
};

export default ProjectsSection;
