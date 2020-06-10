import React, {useState} from 'react';
import {Icon} from "react-icons-kit";
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'
import languages from "../enums/languages";

const LanguageSelector = props => {

    const [showDropDown, setShowDropDown] = useState(false);

    const selectLanguage = (lang) => {
        setShowDropDown(false);
        props.setSelectedLanguage(lang);
    }

    const toggleShowDropDown = () => {
        setShowDropDown(!showDropDown);
    }

    return (
        <div className="language-dropdown">
            <div className="selected-language" onClick={toggleShowDropDown}>{props.selectedLanguage} <Icon icon={ic_keyboard_arrow_down} size={18} /></div>
            {
                showDropDown &&
                <div className="language-items">
                {
                    Object.keys(languages).map((lang, index) => {
                        return lang !== props.selectedLanguage && <div className="language-item" key={index} onClick={() => selectLanguage(lang)}>{lang}</div>
                    })
                }
                </div>
            }
        </div>
    );
};

export default LanguageSelector;