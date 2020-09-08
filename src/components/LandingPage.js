import React from 'react';

import ACOFacts from "./ACOFacts";
import pages from "../enums/pages";
import AboutUs from './sections/AboutUs';
import BasicSection from "./common/BasicSection";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import languages from '../enums/languages';

const LandingPage = props => {
    return (
        <>
            <AboutUs
                setCurrentSection={props.setCurrentSection}
                label={props.label}
            />
            <ACOFacts label={props.label}/>
            <BasicSection sectionId={pages.PROJECTS}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported() ? require('../img/section_projects.webp') : require('../img/section_projects.jpg')}
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
