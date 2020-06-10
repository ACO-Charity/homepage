import pages from '../enums/pages';
import links from '../enums/links';
import { Icon } from 'react-icons-kit';
import icon from '../img/Aco_Logo_Weiss.svg';
import LanguageSelector from "./LanguageSelector";
import React, { useEffect, useState } from 'react';
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { useLocation, useHistory } from 'react-router-dom';
import { ic_favorite } from 'react-icons-kit/md/ic_favorite';
import { ic_keyboard_backspace } from 'react-icons-kit/md/ic_keyboard_backspace';

const Header = props => {

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [inited, setInited] = useState(false);

  const isScrolling = props.scrollPosY > 40;
  const location = useLocation();
  const history = useHistory();

  const headerStyleClass = isScrolling ? 'scrolling' : '';

  useEffect(() => {
    return () => {
      console.log('isScrolling', isScrolling);
      setInited(true);
    };
  }, [isScrolling]);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const onDonationClick = () => {
    window.open(links.PAYPAL_DONATION_LINK, '_blank');
  };

  const scrollTo = (section) => {
    window.location.href = '#' + section;
  };

  const isLandingPage = () => {
    return location.pathname === "/";
  };

  const goLandingPage = () => {
    history.push("/");
  };

  const mobileNavScrollTo = (page) => {
    setShowMobileNav(false);
    scrollTo(page);
  };

  return (
    <header className={headerStyleClass}>
      <div className={"top-nav" + (inited ? ' inited' : '')}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img id="nav-logo" className="mr-5" src={icon} alt="LOGO" />
            <LanguageSelector selectedLanguage={props.selectedLanguage} setSelectedLanguage={props.setSelectedLanguage} />
          </div>
          {
            !isScrolling &&
            <button className="btn btn-icon btn-primary" onClick={onDonationClick}><Icon icon={ic_favorite} /> {props.label.DONATE_BUTTON}</button>
          }
        </div>
      </div>

      <nav>
        <div className="container">
          <div className="nav-items">
            <div className="d-none d-md-flex flex-grow-1">
              {
                isLandingPage() &&
                Object.keys(pages).map((page, index) =>
                  <div className={"nav-item " + (page === props.currentSection ? 'active' : '')} key={index} onClick={() => scrollTo(page)}>
                    {props.label[page]}
                  </div>
                )
              }

              {
                !isLandingPage() &&
                <div className="nav-item d-flex align-items-center" onClick={goLandingPage}>
                  <Icon size={26} icon={ic_keyboard_backspace} /><span className="ml-2">{props.label.BACK}</span>
                </div>
              }

              {
                isScrolling &&
                <>
                  <div className="nav-item">
                    <LanguageSelector selectedLanguage={props.selectedLanguage} setSelectedLanguage={props.setSelectedLanguage} />
                  </div>
                  <div className="nav-item" style={{
                    marginLeft: 'auto',
                    marginRight: '0'
                  }}>
                    <button className="btn btn-icon btn-primary" onClick={onDonationClick}><Icon icon={ic_favorite} /> {props.label.DONATE_BUTTON}</button>
                  </div>
                </>
              }
            </div>
            <div className={"burger-menu d-flex d-md-none position-relative align-items-center " + (isScrolling ? '' : 'justify-content-end')}>
              {
                isScrolling &&
                <div className="nav-item">
                  <LanguageSelector selectedLanguage={props.selectedLanguage} setSelectedLanguage={props.setSelectedLanguage} />
                </div>
              }
              <img id="nav-logo-scroll" src={icon} alt="LOGO" />
              {
                isLandingPage() ?
                  <div className={"nav-item " + (showMobileNav ? 'active' : '')} onClick={toggleMobileNav}>
                    <Icon size={30} icon={ic_menu} />
                  </div>
                  :
                  <div className="nav-item d-flex align-items-center" onClick={goLandingPage}>
                    <Icon size={26} icon={ic_keyboard_backspace} /><span className="ml-2">{props.label.BACK}</span>
                  </div>
              }
            </div>
          </div>
        </div>
      </nav>
      {showMobileNav && isLandingPage() &&
        <div id="mobile-nav" className="d-md-none">
          {
            Object.keys(pages).map((page, index) =>
              <div className={"mobile-nav-item " + (page === props.currentSection ? 'active' : '')} key={index} onClick={() => mobileNavScrollTo(page)}>
                {props.label[page]}
              </div>)
          }
        </div>
      }
    </header>
  );
};

export default Header;
