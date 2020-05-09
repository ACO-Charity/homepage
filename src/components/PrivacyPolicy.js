import React from 'react';
import links from "../enums/links";

const PrivacyPolicy = props => {
    return (
        <div className="jumbotron container">
            <h1>{props.label.PRIVACY_TEXT.PRIVACY_POLICY}</h1>
            <div className="data-protection mt-4">
                <h3>{props.label.PRIVACY_TEXT.DATA_PROTECTION}</h3>
            </div>
        </div>
    );
};
export default PrivacyPolicy;