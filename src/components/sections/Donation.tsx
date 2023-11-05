import {useTranslation} from 'react-i18next';
import sectionImage from '../../assets/img/section_donate.jpg';
import {Links} from '../../enums/Links.ts';
import {Pages} from '../../enums/Pages.ts';
import BasicSections from '../common/sections/BasicSections.tsx';
import './donate-section.scss';

const Donation = () => {
    const {t} = useTranslation();
    const image = sectionImage;

    return (
        <BasicSections sectionImage={image}
                       sectionTitle={t('PAGES.DONATION')}
                       sectionId={Pages.DONATION}>
            <p>{t('DONATE_TEXT_1')}</p>
            <button className="btn btn-primary font-weight-bold mb-5" onClick={() => {
                window.open(Links.PAYPAL_DONATION_LINK, '_blank');
            }}>{t('CTA.DONATE_NOW')}!
            </button>
            <p>{t('DONATE_TEXT_2')}</p>
            <div className="mb-5 banking-info d-flex justify-content-center align-items-center flex-column">
                <div className="font-weight-bold">
                    <p>ACO Charity e.V.</p>
                    <p>IBAN: DE30701500001001866845</p>
                    <p>SWIFT-BIC: SSKMDEMMXXX</p>
                </div>
            </div>
            <p className="mt-5">{t('DONATE_AMAZON')}</p>
            <a className="btn btn-primary font-weight-bold mb-5" href={Links.AMAZON_SMILE} target="_blank" rel="noopener noreferrer">Amazon Smile</a>
        </BasicSections>
    );
};

export default Donation;