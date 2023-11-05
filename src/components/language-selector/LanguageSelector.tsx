import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import './LanguageSelector.scss';

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const [showDropDown, setShowDropDown] = useState(false);

    const selectLanguage = (lang: string) => {
        setShowDropDown(false);
        i18n.changeLanguage(lang);
    };

    const toggleShowDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    console.debug('i18n', i18n.store.data);

    return (
        <div className="language-dropdown">
            <div className="selected-language" onClick={toggleShowDropDown}>{i18n.language.toUpperCase()} <Icon icon={ic_keyboard_arrow_down}
                                                                                                                size={18}/></div>
            {
                showDropDown &&
                <div className="language-items">
                    {
                        Object.keys(i18n.store.data).map((lang, index) => {
                            return lang !== i18n.language &&
                                <div className="language-item" key={index} onClick={() => selectLanguage(lang)}>{lang.toUpperCase()}</div>;
                        })
                    }
                </div>
            }
        </div>
    );
};

export default LanguageSelector;