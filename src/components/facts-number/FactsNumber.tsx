import {animated, useSpring} from 'react-spring';

export interface FactsNumberProps {
    num: number;
    text: string;
    unit?: string;
}

const FactsNumber = (props: FactsNumberProps) => {
    const {number} = useSpring({number: props.num, from: {number: 0}, delay: 400});
    return (
        <div className="fact-num">
            <p className="fact-num-val">
                <animated.span>
                    {number.to((n) => Number(n.toFixed(0)))}
                </animated.span>
                {
                    props.unit &&
                    <span> {props.unit}</span>
                }
            </p>
            <p className="fact-num-text">{props.text}</p>
        </div>
    );
};

export default FactsNumber;