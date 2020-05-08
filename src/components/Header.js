import React from 'react';
import pages from '../enums/pages';
import labels_de from '../i18n/de';
import icon from '../img/Aco_Logo_Weiss.svg';
import {Icon} from 'react-icons-kit';
import {ic_favorite} from 'react-icons-kit/md/ic_favorite';
import links from '../enums/links';

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
                    <img id="nav-logo" src={icon} alt="LOGO"/>
                    {
                        !isScrolling &&
                        <button className="btn btn-icon btn-primary" onClick={onDonationClick}><Icon icon={ic_favorite}/> {labels_de['DONATION']}</button>
                    }
                </div>
            </div>

            <nav>
                <div className="container">
                    <div className="nav-items">
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
                </div>
            </nav>
        </header>
    );
};

export default Header;
