import React, {useEffect, useState} from 'react';

import ACOService from "../services/ACOService";
import FactsNumber from "./FactsNumber";

const ACOFacts = props => {

    const [memberCount, setMemberCount] = useState(null);

    useEffect(()=> {
        ACOService.getMembercount().then( res => {
            setMemberCount(res.data);
        })
    }, [])

    return (
        <div id="aco-facts" className="aco-facts">
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {
                            memberCount &&
                            <FactsNumber num={memberCount} text={props.label.MEMBERS}/>
                        }
                    </div>
                    <div className="col-12 col-md-3">
                        <FactsNumber num={14} text={props.label.EVENTS}/>
                    </div>
                    <div className="col-12 col-md-3">
                        <FactsNumber num={17} text={props.label.PROJECTS}/>
                    </div>
                    <div className="col-12 col-md-3">
                        <FactsNumber num={59990} text={props.label.DONATED} unit={'€'}/>
                    </div>
                </div>

                <hr/>
                bla bla bla bla bla bla bla blabla bla bla blabla bla bla bla
            </div>
        </div>
    );
};
export default ACOFacts;