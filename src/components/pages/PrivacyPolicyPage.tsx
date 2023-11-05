import {useTranslation} from 'react-i18next';
import Folding from '../common/folding/Folding.tsx';
import './privacy.scss';

const PrivacyPolicyPage = () => {
    const {t} = useTranslation();
    return (
        <div id="privacy" className="jumbotron container">
            <h1>{t('PRIVACY_TEXT.PRIVACY_POLICY')}</h1>
            <Folding title={t('PRIVACY_TEXT.GENERAL_TITLE')}>
                <p>{t('PRIVACY_TEXT.GENERAL_CONTENT_0')}</p>
                <p>{t('PRIVACY_TEXT.GENERAL_CONTENT_1')}</p>
                <p>{t('PRIVACY_TEXT.GENERAL_CONTENT_2')}</p>
            </Folding>
            <Folding title={t('PRIVACY_TEXT.WHO_TITLE')}>
                <p>{t('PRIVACY_TEXT.WHO_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.PERSONAL_DATA_TITLE')}>
                <p>{t('PRIVACY_TEXT.PERSONAL_DATA_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.HOSTING_TITLE')}>
                <p>{t('PRIVACY_TEXT.HOSTING_CONTENT_0')}</p>
                <p>{t('PRIVACY_TEXT.HOSTING_CONTENT_1')}</p>
                <p>{t('PRIVACY_TEXT.HOSTING_CONTENT_2')}</p>
                <p><b>{t('PRIVACY_TEXT.HOSTING_PROCESSING_SUBTITLE')}</b></p>
                <p>{t('PRIVACY_TEXT.HOSTING_PROCESSING_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.COOKIES_TITLE')}>
                <p>{t('PRIVACY_TEXT.COOKIES_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.ANALYTICS_TITLE')}>
                <p>{t('PRIVACY_TEXT.ANALYTICS_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.SSL_TITLE')}>
                <p>{t('PRIVACY_TEXT.SSL_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.REVOKE_TITLE')}>
                <p>{t('PRIVACY_TEXT.REVOKE_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.APPEAL_RIGHT_TITLE')}>
                <p>{t('PRIVACY_TEXT.APPEAL_RIGHT_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.TRANSFERABILITY_TITLE')}>
                <p>{t('PRIVACY_TEXT.TRANSFERABILITY_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.INFO_DEL_CORR_TITLE')}>
                <p>{t('PRIVACY_TEXT.INFO_DEL_CORR_CONTENT')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.REVOKE_TITLE')}>
                <p>{t('PRIVACY_TEXT.REQUEST_CONTENT_0')}</p>
                <p>{t('PRIVACY_TEXT.REQUEST_CONTENT_1')}</p>
                <p>{t('PRIVACY_TEXT.REQUEST_CONTENT_2')}</p>
            </Folding>

            <Folding title={t('PRIVACY_TEXT.YOUTUBE_TITLE')}>
                <p>{t('PRIVACY_TEXT.YOUTUBE_CONTENT_0')}</p>
                <p>{t('PRIVACY_TEXT.YOUTUBE_CONTENT_1')}</p>
                <p>{t('PRIVACY_TEXT.YOUTUBE_CONTENT_2')}</p>
            </Folding>
        </div>
    );
};

export default PrivacyPolicyPage;