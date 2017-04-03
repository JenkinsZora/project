import React, {Component} from 'react';
import './home_page.css';


export default class MinusItem extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }

    render() {
        return (
            <li onClick={this.changeIndex}>
                <div className="circle"></div>
                <h2>{this.props.reward.score}<span>$</span></h2>
                <h1>{this.props.reward.name}</h1>
            </li>
        );
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.reward);
    }

}