import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-icons-kit';
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial';
import {instagram} from 'react-icons-kit/fa/instagram';
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import {ic_mail} from 'react-icons-kit/md/ic_mail';
import {useNavigate} from 'react-router-dom';
import {version} from '../../../package.json';
import whiteLogo from '../../assets/img/Aco_Logo_Weiss.svg';
import {Links} from '../../enums/Links.ts';
import ACOModal from '../common/modal/ACOModal.tsx';
import './footer.scss';

const Footer = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [showConstitution, setShowConstitution] = useState(false);

    const mailToUs = () => {
        window.open('mailto:' + Links.CONTACT_MAIL);
    };

    const openInsta = () => {
        window.open(Links.INSTAGRAM, '_blank');

    };

    const openFacebook = () => {
        window.open(Links.FACEBOOK, '_blank');
    };

    const openYoutube = () => {
        window.open(Links.YOUTUBE, '_blank');
    };

    const goImprint = () => {
        navigate('/imprint');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    const goPrivacyPolicy = () => {
        navigate('/privacy-policy');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-center">
                        <img id="footer-logo" src={whiteLogo} alt="LOGO"/>
                    </div>
                    <div className="contact-us col-9 d-flex flex-column justify-content-center">
                        <h1 className="font-weight-bold">{t('ACO_MOTTO')}</h1>
                        <div className="anchor-style" onClick={() => setShowConstitution(true)}>{t('CONSTITUTION')}</div>
                    </div>
                </div>
                <div className="row footer-second-line">
                    <div className="socialmedia col-3 d-flex justify-content-around">
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
                    <div className="cta-contact col-9">
                        <button className="btn btn-primary btn-icon" onClick={mailToUs}>
                            <Icon size={28} icon={ic_mail}/>
                            {t('CONTACT_US')}
                        </button>
                    </div>
                </div>
                <hr/>
                <div className="footer-links d-flex align-items-center justify-content-center">
                    <span className="footer-link" onClick={goImprint}>{t('IMPRINT')}</span> | <span className="footer-link"
                                                                                                    onClick={goPrivacyPolicy}>{t('PRIVACY_POLICY')}</span>
                </div>
                <div className="footer-copyright d-flex align-items-center justify-content-center">
                    <span title={`v${version}`}>{currentYear} © ACO Charity e.V.</span>
                </div>
            </div>
            {showConstitution &&
                <ACOModal show={showConstitution} onClose={() => setShowConstitution(false)}>
                    <embed src="/docs/satzung.pdf" type="application/pdf" width="100%" height="100%"/>
                </ACOModal>
            }
        </footer>
    );
};

export default Footer;