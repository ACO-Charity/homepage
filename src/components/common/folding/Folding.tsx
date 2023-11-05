import {PropsWithChildren, useState} from 'react';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up';
import './folding.scss';

export interface FoldingProps extends PropsWithChildren {
    title: string;
}

const Folding = (props: FoldingProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="folding-component">
            <div className="folding-toggle" onClick={toggleOpen}>
                <h3 className="folding-title">{props.title}</h3>
                <Icon size={30} icon={isOpen ? ic_keyboard_arrow_up : ic_keyboard_arrow_down}/>
            </div>
            {
                isOpen &&
                <div className="folding-content">
                    {props.children}
                </div>
            }
        </div>
    );
};

export default Folding;