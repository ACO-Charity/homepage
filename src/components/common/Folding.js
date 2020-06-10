import { Icon } from "react-icons-kit";
import React, { useState } from 'react';
import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

const Folding = props => {

  const [isOpen, setIsOpen] = useState(false);

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
        <div className="folding-content">
          {props.children}
        </div>
      }
    </div>
  );
};

export default Folding;