import React from 'react';
import pages from "../enums/pages";
import BasicSection from "./common/BasicSection";
import newsSectionImage from '../img/section_news.jpg';
import projectsSectionImage from '../img/section_projects.jpg';
import donateSectionImage from '../img/section_donate.jpg';
import joinSectionImage from '../img/section_join.jpg';
import ACOFacts from "./ACOFacts";
import AboutUs from './sections/AboutUs';

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
                          sectionImage={newsSectionImage}
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
                          sectionImage={projectsSectionImage}
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
                          sectionImage={donateSectionImage}
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
                          sectionImage={joinSectionImage}
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
