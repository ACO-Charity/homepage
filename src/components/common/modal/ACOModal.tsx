import {PropsWithChildren} from 'react';
import './acomodal.scss';

export interface ACOModalProps extends PropsWithChildren {
    onClose: () => void;
    show?: boolean;
}

const ACOModal = (props: ACOModalProps) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="aco-modal-background d-flex justify-content-center align-items-center" onClick={props.onClose}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ACOModal;