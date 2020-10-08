import React from 'react';

const ACOModal = props => {
    return (
        <div className="aco-modal-background d-flex justify-content-center align-items-center" onClick={props.onClose}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ACOModal;
