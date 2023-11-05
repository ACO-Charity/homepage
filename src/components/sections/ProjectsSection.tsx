import {useTranslation} from 'react-i18next';
import sectionImage from '../../assets/img/section_projects.jpg';
import {Pages} from '../../enums/Pages.ts';
import BasicSections from '../common/sections/BasicSections.tsx';

const ProjectsSection = () => {
    const {t, i18n} = useTranslation();
    const image = sectionImage;
    console.debug('i18n.language', i18n.language);
    return (
        <BasicSections sectionImage={image}
                       sectionTitle={t('PAGES.PROJECTS')}
                       sectionId={Pages.PROJECTS}>
            <p>{t('PROJECT_SECTION_TEXT')}</p>

            <h3 className="mt-5">{t('PROJECT_BIEN_HOA_TITLE')}</h3>
            <p>{t('PROJECT_BIEN_HOA_TEXT_1')}</p>
            <p>{t('PROJECT_BIEN_HOA_TEXT_2')}</p>

            <h3 className="mt-5">{t('PROJECT_HLT_TITLE')}</h3>
            <p>{t('PROJECT_HLT_TEXT_1')}</p>

            <h3 className="mt-5">{t('PROJECT_VS_TITLE')}</h3>
            {
                i18n.language === 'de' &&
                <p className="text-center mt-5 mb-5"><i>{t('PROJECT_VS_QOUTE')}</i></p>
            }
            <p>{t('PROJECT_VS_TEXT_1')}</p>
            <p>{t('PROJECT_VS_TEXT_2')}</p>
        </BasicSections>
    );
};

export default ProjectsSection;