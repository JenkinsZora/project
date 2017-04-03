import React, {Component} from 'react';
import './home_page.css';
import logob from './img/a.gif';
import logoc from './img/2.png';
export default class leftBoxTop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="left-box-top"
                 style={{backgroundImage:`url(${logob})`}}>
                <div className="left-top-black">
                    <div className="head-portrait">
                        <img src={logoc} alt=""/>
                    </div>
                    <h4>WEB1508A</h4>
                    <h4>人数：29人</h4>
                    <h4>总额：33000元</h4>
                    <h6>2017年2月16日</h6>
                </div>
            </div>
        );
    }


}