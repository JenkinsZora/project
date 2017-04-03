import React, {Component} from 'react';
import './home_page.css';


export default class SalaryIncrease extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }

    render() {
        // console.log(this.props.Chcolor);
        var colors=["#5ac76c","#dea033","#dd3333","#5bc6bb","#5a88c6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        return (
            <li style={this.props.numColor==this.props.reward.id?{backgroundColor:colors[this.props.index%5]}:{borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:"1px",borderColor:colors[this.props.index%5],borderStyle:"solid"}
            }
                onClick={this.changeIndex}
                onMouseOver={() => this.props.chColor(this.props.reward)}>
                <h1 style={this.props.numColor==this.props.reward.id?{color:"#fff"}:{color:colors[this.props.index%5]}}> {this.props.reward.name}</h1>
                <h2 style={this.props.numColor==this.props.reward.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>+{this.props.reward.score}<span style={this.props.numColor==this.props.reward.id?{color:"#fff"}:{}}>$</span></h2>
            </li>
        );
    }

    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.obj);
    }
}

