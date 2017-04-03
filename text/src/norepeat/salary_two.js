import React, {Component} from 'react';
import '../conponent/home_page.css';
import cha from './yuan_11.png';

export default class SalaryTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <li onClick={()=>this.props.changedel(this.props.obj,this.props.index)}>
               <img src={cha} alt=""/>
               <h1>{this.props.obj.des}</h1>
               <h2>+{this.props.obj.operate}<span>$</span></h2>
           </li>
        )
    }
}

