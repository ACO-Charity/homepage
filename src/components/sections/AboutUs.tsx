import {useTranslation} from 'react-i18next';
import sectionImage from '../../assets/img/section_about.jpg';
import {Pages} from '../../enums/Pages.ts';
import BasicSections from '../common/sections/BasicSections.tsx';
import './about-us.scss';

const AboutUs = () => {
    const {t} = useTranslation();
    const image = sectionImage;
    return (
        <BasicSections sectionImage={image}
                       sectionTitle={t('PAGES.ABOUT_US')}
                       sectionId={Pages.ABOUT_US}>
            <p>{t('ABOUT_SECTION_TEXT')}</p>
            <p>{t('ABOUT_SECTION_TEXT_2')}</p>
            <p>{t('ABOUT_SECTION_TEXT_3')}</p>
            <div className="d-flex align-items-center justify-content-center">
                <div className="about-core-box d-flex align-items-center justify-content-center flex-column mt-5">
                    <p>{t('ABOUT_SECTION_TEXT_CORE_1')}</p>
                    <p>{t('ABOUT_SECTION_TEXT_CORE_2')}</p>
                    <p>{t('ABOUT_SECTION_TEXT_CORE_3')}</p>
                </div>
            </div>
        </BasicSections>
    );
};

export default AboutUs;