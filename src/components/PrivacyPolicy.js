import React from 'react';
import Folding from "./common/Folding";

const PrivacyPolicy = props => {
  return (
    <div id="privacy" className="jumbotron container">
      <h1>{props.label.PRIVACY_TEXT.PRIVACY_POLICY}</h1>
      <Folding title={props.label.PRIVACY_TEXT.GENERAL_TITLE}>
        <p>{props.label.PRIVACY_TEXT.GENERAL_CONTENT_0}</p>
        <p>{props.label.PRIVACY_TEXT.GENERAL_CONTENT_1}</p>
        <p>{props.label.PRIVACY_TEXT.GENERAL_CONTENT_2}</p>
      </Folding>
      <Folding title={props.label.PRIVACY_TEXT.WHO_TITLE}>
        <p>{props.label.PRIVACY_TEXT.WHO_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.PERSONAL_DATA_TITLE}>
        <p>{props.label.PRIVACY_TEXT.PERSONAL_DATA_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.HOSTING_TITLE}>
        <p>{props.label.PRIVACY_TEXT.HOSTING_CONTENT_0}</p>
        <p>{props.label.PRIVACY_TEXT.HOSTING_CONTENT_1}</p>
        <p>{props.label.PRIVACY_TEXT.HOSTING_CONTENT_2}</p>
        <p><b>{props.label.PRIVACY_TEXT.HOSTING_PROCESSING_SUBTITLE}</b></p>
        <p>{props.label.PRIVACY_TEXT.HOSTING_PROCESSING_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.COOKIES_TITLE}>
        <p>{props.label.PRIVACY_TEXT.COOKIES_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.ANALYTICS_TITLE}>
        <p>{props.label.PRIVACY_TEXT.ANALYTICS_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.SSL_TITLE}>
        <p>{props.label.PRIVACY_TEXT.SSL_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.REVOKE_TITLE}>
        <p>{props.label.PRIVACY_TEXT.REVOKE_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.APPEAL_RIGHT_TITLE}>
        <p>{props.label.PRIVACY_TEXT.APPEAL_RIGHT_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.TRANSFERABILITY_TITLE}>
        <p>{props.label.PRIVACY_TEXT.TRANSFERABILITY_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.INFO_DEL_CORR_TITLE}>
        <p>{props.label.PRIVACY_TEXT.INFO_DEL_CORR_CONTENT}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.REVOKE_TITLE}>
        <p>{props.label.PRIVACY_TEXT.REQUEST_CONTENT_0}</p>
        <p>{props.label.PRIVACY_TEXT.REQUEST_CONTENT_1}</p>
        <p>{props.label.PRIVACY_TEXT.REQUEST_CONTENT_2}</p>
      </Folding>

      <Folding title={props.label.PRIVACY_TEXT.YOUTUBE_TITLE}>
        <p>{props.label.PRIVACY_TEXT.YOUTUBE_CONTENT_0}</p>
        <p>{props.label.PRIVACY_TEXT.YOUTUBE_CONTENT_1}</p>
        <p>{props.label.PRIVACY_TEXT.YOUTUBE_CONTENT_2}</p>
      </Folding>
    </div>
  );
};
export default PrivacyPolicy;