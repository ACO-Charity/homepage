import React from 'react';
import Folding from "./common/Folding";

const PrivacyPolicy = props => {
    return (
        <div className="jumbotron container">
            <h1>{props.label.PRIVACY_TEXT.DATA_PROTECTION}</h1>
            <Folding title={props.label.PRIVACY_TEXT.GENERAL}>
                <p>dkalöskdasd</p>
            </Folding>
        </div>
    );
};
export default PrivacyPolicy;