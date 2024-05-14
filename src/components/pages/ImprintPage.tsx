import {useTranslation} from 'react-i18next';
import {Links} from '../../enums/Links.ts';
import './imprint.scss';

const ImprintPage = () => {
    const {t} = useTranslation();

    return (
        <div id="imprint" className="jumbotron container">
            <h1>{t('PAGES.IMPRINT')}</h1>
            <div className="address mt-4">
                <h3>{t('IMPRINT_TEXT.HQ')}</h3>
                <p className="mb-0">ACO Charity e.V.</p>
                <p className="mb-0">Breisacher Str. 12</p>
                <p className="mb-0">81667 München</p>
                <span className="mb-0">E-mail: <a href={'mailto:' + Links.CONTACT_MAIL_SECONDARY}>{Links.CONTACT_MAIL_SECONDARY}</a></span>

            </div>
            <div id="executives" className="mt-3">
                <h3>{t('CTA.EXECUTIVES')}</h3>
                <ol>
                    <li>Maily Pham</li>
                    <li>Quoc Binh Ta</li>
                    <li>Bao Ngoc Nguyen</li>
                </ol>
            </div>
            <div id="registry" className="mt-3">
                <h3>{t('IMPRINT_TEXT.REGISTRY')}</h3>
                <p className="mb-0">{t('IMPRINT_TEXT.COURT')}</p>
                <p className="mb-0">{t('IMPRINT_TEXT.REG_NUMBER')}</p>
            </div>

            <h2 className="mt-5">{t('IMPRINT_TEXT.DISCLAIMER')}</h2>
            <div className="mt-4">
                <h3>{t('IMPRINT_TEXT.LIABILITY_CONTENT_TITLE')}</h3>
                <p>{t('IMPRINT_TEXT.LIABILITY_CONTENT_TEXT')}</p>
            </div>
            <div className="mt-3">
                <h3>{t('IMPRINT_TEXT.LIABILITY_LINKS_TITLE')}</h3>
                <p>{t('IMPRINT_TEXT.LIABILITY_LINKS_TEXT')}</p>
            </div>
            <div className="mt-3">
                <h3>{t('IMPRINT_TEXT.COPYRIGHT_TITLE')}</h3>
                <p>{t('IMPRINT_TEXT.COPYRIGHT_TEXT')}</p>
            </div>
        </div>
    );
};

export default ImprintPage;