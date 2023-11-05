import {useTranslation} from 'react-i18next';
import sectionImage from '../../assets/img/section_join.jpg';
import {Links} from '../../enums/Links.ts';
import {Pages} from '../../enums/Pages.ts';
import BasicSections from '../common/sections/BasicSections.tsx';

const JoinUs = () => {
    const {t} = useTranslation();
    const image = sectionImage;

    return (
        <BasicSections sectionImage={image}
                       sectionTitle={t('PAGES.JOIN_US')}
                       sectionId={Pages.JOIN_US}>
            <p>{t('JOIN_TEXT')}</p>
            <button className="btn btn-primary" onClick={() => {
                window.open(`mailto:${Links.HR_MAIL}`);
            }}>{t('JOIN_US_NOW')}</button>
        </BasicSections>
    );
};

export default JoinUs;