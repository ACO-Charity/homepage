import React, {useState} from 'react';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up';
import {Icon} from "react-icons-kit";

const Folding = props => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="folding-component">
            <div className="folding-toggle" onClick={toggleOpen}>
                <h3 className="folding-title">{props.title}</h3>
                <Icon size={30} icon={isOpen ? ic_keyboard_arrow_up : ic_keyboard_arrow_down} />
            </div>
            {
                isOpen &&
                    <>
                        {props.children}
                    </>
            }
        </div>
    );
};

export default Folding;