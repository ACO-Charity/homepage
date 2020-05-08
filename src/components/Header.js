import React from 'react';
import pages from '../enums/pages';
import labels_de from '../i18n/de';
import icon from '../img/Aco_Logo_Weiss.svg';
import {Icon} from 'react-icons-kit';
import {ic_favorite} from 'react-icons-kit/md/ic_favorite';

const Header = props => {

    return (
        <header>
            <div className="top-nav">
                <div className="container">
                    <img id="nav-logo" src={icon} alt="LOGO"/>
                    <button className="btn btn-icon btn-primary"><Icon icon={ic_favorite}/> {labels_de['DONATION']}</button>
                </div>
            </div>

            <nav>
                <div className="container">
                    <div className="nav-items">
                        {
                            Object.keys(pages).map((page, index) =>
                                <div className="nav-item" key={index}>
                                    {labels_de[page]}
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {};

export default Header;
