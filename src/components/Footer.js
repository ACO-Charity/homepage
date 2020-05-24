import React from 'react';
import whiteLogo from '../img/Aco_Logo_Weiss.svg';
import {Icon} from 'react-icons-kit';
import {instagram} from 'react-icons-kit/fa/instagram';
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial';
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import {ic_mail} from 'react-icons-kit/md/ic_mail';
import links from '../enums/links';
import {useHistory} from 'react-router-dom';

const Footer = props => {

    const mailToUs = () => {
        window.open('mailto:' + links.CONTACT_MAIL);
    };

    const openInsta = () => {
        window.open(links.INSTAGRAM, '_blank');

    };

    const openFacebook = () => {
        window.open(links.FACEBOOK, '_blank');
    };

    const openYoutube = () => {
        window.open(links.YOUTUBE, '_blank');
    };

    const history = useHistory();

    const goImprint = () => {
        history.push('imprint')
        setTimeout( () => {window.scrollTo(0,0)},100)
    };

    const goPrivacyPolicy = () => {
        history.push('privacy-policy')
        setTimeout( () => {window.scrollTo(0,0)},100)
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3 align-items-center justify-content-center">
                        <div className="row justify-content-center">
                            <img id="footer-logo" src={whiteLogo} alt="LOGO"/>
                        </div>
                        <div className="row justify-content-center">
                            <div className="socialmedia d-flex">
                                <div className="sm-item" onClick={openInsta}>
                                    <Icon size={40} icon={instagram}/>
                                </div>
                                <div className="sm-item" onClick={openFacebook}>
                                    <Icon size={40} icon={facebookOfficial}/>
                                </div>
                                <div className="sm-item" onClick={openYoutube}>
                                    <Icon size={44} icon={youtubePlay}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="contact-us">
                            <h1 className="font-weight-bold">aölkdalöd kölsaköölsa</h1>
                            <p>saldsad äöldasad säd la ösald</p>
                        </div>
                        <div className="cta-contact">
                            <button className="btn btn-primary btn-icon" onClick={mailToUs}>
                                <Icon size={28} icon={ic_mail}/>
                                {props.label.CONTACT_US}
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer-links d-flex align-items-center justify-content-center">
                    <span className='footer-link' onClick={goImprint}>{props.label.IMPRINT}</span> | <span className='footer-link' onClick={goPrivacyPolicy}>{props.label.PRIVACY_POLICY}</span>
                </div>
                <div className="footer-copyright d-flex align-items-center justify-content-center">
                    <span>2020 © ACO Charity e.V.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
