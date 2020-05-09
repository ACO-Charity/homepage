import React from 'react';
import pages from '../enums/pages';
import labels_de from '../i18n/de';
import icon from '../img/Aco_Logo_Weiss.svg';
import {Icon} from 'react-icons-kit';
import {ic_favorite} from 'react-icons-kit/md/ic_favorite';
import links from '../enums/links';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import LanguageSelector from "./LanguageSelector";

const Header = props => {

    const isScrolling = props.scrollPosY > 40;

    const headerStyleClass = isScrolling ? 'scrolling' : '';

    const onDonationClick = () => {
        window.open(links.PAYPAL_DONATION_LINK, '_blank');
    };

    const scrollTo = (section) => {
        window.location.href = '#' + section;
    };

    return (
        <header className={headerStyleClass}>
            <div className="top-nav">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                    <img id="nav-logo" className="mr-5" src={icon} alt="LOGO"/>
                    <LanguageSelector selectedLanguage={props.selectedLanguage} setSelectedLanguage={props.setSelectedLanguage}/>
                    </div>
                    {
                        !isScrolling &&
                        <button className="btn btn-icon btn-primary" onClick={onDonationClick}><Icon icon={ic_favorite}/> {labels_de['DONATION']}</button>
                    }
                </div>
            </div>

            <nav>
                <div className="container">
                    <div className="nav-items">
                        <div className="d-none d-md-flex flex-grow-1">
                            {
                                Object.keys(pages).map((page, index) =>
                                    <div className="nav-item" key={index} onClick={() => scrollTo(page)}>
                                        {labels_de[page]}
                                    </div>
                                )
                            }
                            {
                                isScrolling &&
                                <div className="nav-item" style={{marginLeft: 'auto'}}>
                                    <button className="btn btn-icon btn-primary" onClick={onDonationClick}><Icon icon={ic_favorite}/> {labels_de['DONATION']}</button>
                                </div>
                            }
                        </div>
                        <div className="burger-menu d-flex d-md-none position-relative align-items-center">
                            <img id="nav-logo-scroll" src={icon} alt="LOGO"/>
                            <div className="nav-item">
                                <Icon size={30} icon={ic_menu}/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
