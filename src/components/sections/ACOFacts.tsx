import {useEffect, useState} from 'react';
import {Fade} from 'react-awesome-reveal';
import {useTranslation} from 'react-i18next';
import AcoApi from '../../api/AcoApi.ts';
import FactsNumber from '../facts-number/FactsNumber.tsx';
import './aco-facts.scss';

const AcoFacts = () => {
    const {t} = useTranslation();
    const [memberCount, setMemberCount] = useState(null);
    const [revealed, setRevealed] = useState(false);

    const onVisibilityChange = (inView: boolean, _entry: IntersectionObserverEntry) => {
        if (inView) {
            setRevealed(true);
        }
    };

    useEffect(() => {
        AcoApi.getMembercount().then(res => {
            console.debug('res', res);
            setMemberCount(res.data);
        });
    }, []);

    return (
        <Fade onVisibilityChange={onVisibilityChange}>
            {revealed &&
                <div id="aco-facts" className="aco-facts">
                    <div className="container">
                        <hr/>
                        <h2 className="aco-facts-title">{t('ACO_IN_NUMBERS')}</h2>
                        {
                            memberCount &&
                            <div className="row pt-5">
                                <div className="col-12 col-md-3">
                                    <FactsNumber num={memberCount} text={t('MEMBERS')}/>
                                </div>
                                <div className="col-12 col-md-3">
                                    <FactsNumber num={14} text={t('EVENTS')}/>
                                </div>
                                <div className="col-12 col-md-3">
                                    <FactsNumber num={17} text={t('PROJECTS')}/>
                                </div>
                                <div className="col-12 col-md-3">
                                    <FactsNumber num={60058.37} text={t('DONATED')} unit={'€'}/>
                                </div>
                            </div>
                        }
                        <hr/>
                    </div>
                </div>
            }
        </Fade>
    );
};

export default AcoFacts;