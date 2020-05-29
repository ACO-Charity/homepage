import React from 'react';
import pages from "../enums/pages";
import BasicSection from "./common/BasicSection";
import ACOFacts from "./ACOFacts";
import AboutUs from './sections/AboutUs';
import {isWebpSupported} from 'react-image-webp/dist/utils';

const LandingPage = props => {
    return (
        <>
            <AboutUs
                setCurrentSection={props.setCurrentSection}
                label={props.label}
            />
            <ACOFacts label={props.label}/>
            <BasicSection sectionId={pages.NEWS}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported()? require('../img/section_news.webp') : require('../img/section_news.jpg')}
                          sectionTitle={props.label[pages.NEWS]}>
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
            <BasicSection sectionId={pages.PROJECTS}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported()? require('../img/section_projects.webp') : require('../img/section_projects.jpg')}
                          sectionTitle={props.label[pages.PROJECTS]}>
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
            <BasicSection sectionId={pages.DONATION}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported()? require('../img/section_donate.webp') : require('../img/section_donate.jpg')}
                          sectionTitle={props.label[pages.DONATION]}>
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
            <BasicSection sectionId={pages.JOIN_US}
                          setCurrentSection={props.setCurrentSection}
                          sectionImage={isWebpSupported()? require('../img/section_join.webp') : require('../img/section_join.jpg')}
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
