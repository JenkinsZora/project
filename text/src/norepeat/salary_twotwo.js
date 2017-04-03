import React, {Component} from 'react';
import '../conponent/home_page.css';
import cha from './yuan_11.png';

export default class SalaryTwoTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="douustwotwo">
                <img src={cha} alt=""/>
                <p>{this.props.obj.des}</p>
                <span>{this.props.obj.operate}<span>$</span></span>
            </div>
        )
    }
}
