import React from 'react';
import links from "../enums/links";

const Imprint = props => {
    return (
        <div id="imprint" className="jumbotron container">
            <h1>{props.label.IMPRINT}</h1>
            <div className="address mt-4">
                <h3>{props.label.IMPRINT_TEXT.HQ}</h3>
                <p className="mb-0">Asia Charity Organization (ACO) e.V.</p>
                <p className="mb-0">Postfach 34 01 13</p>
                <p className="mb-0">80098 München</p>
                <span className="mb-0">E-mail: <a href={"mailto:"+links.CONTACT_MAIL_SECONDARY}>{links.CONTACT_MAIL_SECONDARY}</a></span>
            </div>
            <div id="executives" className="mt-3">
                <h3>{props.label.EXECUTIVES}</h3>
                <ol>
                    <li>Binh Ta</li>
                    <li>Shayla Giap</li>
                    <li>Sonja Huyen Schotte</li>
                </ol>
            </div>
            <div id="registry" className="mt-3">
                <h3>{props.label.IMPRINT_TEXT.REGISTRY}</h3>
                <p className="mb-0">{props.label.IMPRINT_TEXT.COURT}</p>
                <p className="mb-0">{props.label.IMPRINT_TEXT.REG_NUMBER}</p>
            </div>
        </div>
    );
};

export default Imprint;