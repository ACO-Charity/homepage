import React from 'react';
import BasicSection from '../common/BasicSection';
import pages from '../../enums/pages';
import {isWebpSupported} from "react-image-webp/dist/utils";
import links from '../../enums/links';

const JoinUs = props => {
    const sectionImage = isWebpSupported() ? require('../../img/section_join.webp') : require('../../img/section_join.jpg')

    return (
        <BasicSection sectionId={pages.JOIN_US}
                      setCurrentSection={props.setCurrentSection}
                      sectionImage={sectionImage.default}
                      sectionTitle={props.label[pages.JOIN_US]}>
            <p>{props.label.JOIN_TEXT}</p>
            <button className="btn btn-primary" onClick={() => {
                window.open(`mailto:${links.HR_MAIL}`);
                //window.open(links.BEWERBUNG, '_blank');
            }}>{props.label.JOIN_US_NOW}</button>
        </BasicSection>
    );
};

export default JoinUs;
