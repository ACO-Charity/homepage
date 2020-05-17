import React from 'react';
import pages from "../enums/pages";
import BasicSection from "./common/BasicSection";
import aboutSectionImage from '../img/section_about.jpg';
import newsSectionImage from '../img/section_news.jpg';
import projectsSectionImage from '../img/section_projects.jpg';
import donateSectionImage from '../img/section_donate.jpg';
import joinSectionImage from '../img/section_join.jpg';
import ACOFacts from "./ACOFacts";

const LandingPage = props => {
    return (
        <>
            <BasicSection
                sectionId={pages.ABOUT_US}
                sectionImage={aboutSectionImage}
                sectionTitle={props.label[pages.ABOUT_US]}>
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
            <ACOFacts label={props.label} />
            <BasicSection sectionId={pages.NEWS}
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