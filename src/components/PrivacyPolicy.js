import React from 'react';
import Folding from "./common/Folding";

const PrivacyPolicy = props => {
    return (
        <div id="privacy" className="jumbotron container">
            <h1>{props.label.PRIVACY_TEXT.PRIVACY_POLICY}</h1>
            <Folding title={props.label.PRIVACY_TEXT.GENERAL}>
                <p>{props.label.PRIVACY_TEXT.GENERAL_CONTENT}</p>
            </Folding>
            <Folding title={props.label.PRIVACY_TEXT.WHO_TITLE}>
                <p>{props.label.PRIVACY_TEXT.WHO_CONTENT}</p>
            </Folding>
        </div>
    );
};
export default PrivacyPolicy;