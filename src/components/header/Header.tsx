import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-icons-kit';
import {ic_favorite} from 'react-icons-kit/md/ic_favorite';
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import {useLocation, useNavigate} from 'react-router-dom';
import icon from '../../assets/img/Aco_Logo_Weiss.svg';
import {Links} from '../../enums/Links.ts';
import {Pages} from '../../enums/Pages.ts';
import {useScrollPosition} from '../../stores/ScrollPositionStore.ts';
import LanguageSelector from '../language-selector/LanguageSelector.tsx';
import './header.scss';

export interface HeaderProps {
    currentSection?: string;
}

const Header = (props: HeaderProps) => {
    const {t} = useTranslation();
    const {scrollPosY} = useScrollPosition();
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [inited, setInited] = useState(false);

    const isScrolling = scrollPosY > 40;
    const location = useLocation();
    const navigate = useNavigate();

    const headerStyleClass = isScrolling ? 'scrolling' : '';

    console.debug('scrollPosY', scrollPosY);

    useEffect(() => {
        return () => {
            setInited(true);
        };
    }, [isScrolling]);

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    };

    const onDonationClick = () => {
        window.open(Links.PAYPAL_DONATION_LINK, '_blank');
    };

    const scrollTo = (section: string) => {
        window.location.href = '#' + section;
    };

    const isLandingPage = () => {
        return location?.pathname === '/';
    };

    const goLandingPage = () => {
        navigate('/');
    };

    const mobileNavScrollTo = (page: string) => {
        setShowMobileNav(false);
        scrollTo(page);
    };

    return (
        <header className={headerStyleClass}>
            <div className={'top-nav' + (inited ? ' inited' : '')}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <img id="nav-logo" className="mr-5" src={icon} alt="LOGO"/>
                        <LanguageSelector/>
                    </div>
                    {
                        !isScrolling &&
                        <button className="btn btn-icon btn-primary" onClick={onDonationClick}>
                            {t('CTA.DONATE_BUTTON')}
                        </button>
                    }
                </div>
            </div>

            <nav>
                <div className="container">
                    <div className="nav-items">
                        <div className="d-none d-md-flex flex-grow-1">
                            {
                                isLandingPage() &&
                                Object.keys(Pages).map((page, index) =>
                                    <div className={'nav-item ' + (page === props.currentSection ? 'active' : '')} key={index}
                                         onClick={() => scrollTo(page)}>
                                        {t(`PAGES.${page}`)}
                                    </div>
                                )
                            }

                            {
                                !isLandingPage() &&
                                <div className="nav-item d-flex align-items-center" onClick={goLandingPage}>
                                    <Icon size={26} icon={ic_keyboard_backspace}/><span className="ml-2">{t('CTA.BACK')}</span>
                                </div>
                            }

                            {
                                isScrolling &&
                                <>
                                    <div className="nav-item">
                                        <LanguageSelector/>
                                    </div>
                                    <div className="nav-item" style={{
                                        marginLeft: 'auto',
                                        marginRight: '0'
                                    }}>
                                        <button className="btn btn-icon btn-primary" onClick={onDonationClick}>
                                            <Icon icon={ic_favorite}/>
                                            {t('CTA.DONATE_BUTTON')}
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                        <div
                            className={'burger-menu d-flex d-md-none position-relative align-items-center ' + (isScrolling ? '' : 'justify-content-end')}>
                            {
                                isScrolling &&
                                <div className="nav-item">
                                    <LanguageSelector/>
                                </div>
                            }
                            <img id="nav-logo-scroll" src={icon} alt="LOGO"/>
                            {
                                isLandingPage() ?
                                    <div className={'nav-item ' + (showMobileNav ? 'active' : '')} onClick={toggleMobileNav}>
                                        <Icon size={30} icon={ic_menu}/>
                                    </div>
                                    :
                                    <div className="nav-item d-flex align-items-center" onClick={goLandingPage}>
                                        <Icon size={26} icon={ic_keyboard_backspace}/>
                                        <span className="ml-2">{t('CTA.BACK')}</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {showMobileNav && isLandingPage() &&
                <div id="mobile-nav" className="d-md-none">
                    {
                        Object.keys(Pages).map((page, index) =>
                            <div className={'mobile-nav-item ' + (page === props.currentSection ? 'active' : '')} key={index}
                                 onClick={() => mobileNavScrollTo(page)}>
                                {t(`PAGES.${page}`)}
                            </div>)
                    }
                </div>
            }
        </header>
    );
};

export default Header;