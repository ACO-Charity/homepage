import React from 'react';
import pages from '../../enums/pages';
import {isWebpSupported} from "react-image-webp/dist/utils";
import BasicSection from '../common/BasicSection';
import links from '../../enums/links';

const Donation = props => {
    const sectionImage = isWebpSupported() ? require('../../img/section_donate.webp') : require('../../img/section_donate.jpg')

    return (
        <BasicSection sectionId={pages.DONATION}
                      setCurrentSection={props.setCurrentSection}
                      sectionImage={sectionImage.default}
                      sectionTitle={props.label[pages.DONATION]}>
            <p>{props.label.DONATE_TEXT_1}</p>
            <button className="btn btn-primary font-weight-bold mb-5" onClick={() => {
                window.open(links.PAYPAL_DONATION_LINK, '_blank');
            }}>{props.label.DONATE_NOW}!
            </button>
            <p>{props.label.DONATE_TEXT_2}</p>
            <div className="mb-5 banking-info d-flex justify-content-center align-items-center flex-column">
                <div className="font-weight-bold">
                    <p>ACO Charity e.V.</p>
                    <p>IBAN: DE30701500001001866845</p>
                    <p>SWIFT-BIC: SSKMDEMMXXX</p>
                </div>
            </div>
            <p className="mt-5">{props.label.DONATE_AMAZON}</p>
            <a className="btn btn-primary font-weight-bold mb-5" href={links.AMAZON_SMILE} target="_blank" rel="noopener noreferrer">Amazon Smile</a>
        </BasicSection>
    );
};

export default Donation;
