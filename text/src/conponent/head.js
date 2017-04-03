import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home_page.css';
import logob from './img/logo.png';

export default class Head extends Component {  /**/
    constructor(props){
        super(props);
        this.whitchCourse=this.whitchCourse.bind(this);

    }
    whitchCourse(){
        let aa;
        let time = new Date().getYear() + 1900;
        this.props.courseList.map((obj,index)=>{
            if(obj.cname==this.props.grade.course){
                aa=<div className="teaching-cycle">
                        <span>{time}</span>
                        <span>第{index+1}教学周期</span>
                        <span>|</span>
                        <span>{this.props.courseList[index].cname}</span>

                    </div>
            }
        },this);
        return aa
    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logob} alt=""/>
                </div>
                {
                    this. whitchCourse()
                }
                <div className="teacher">
                    <span>任课老师：苗林超</span>
                    <span>|</span>
                     <span>班主任：胡乃权</span>
                </div>
                <div className="link" onClick={this.props.click}>
                     <img src={this.props.img} alt="" />
                </div>
            </div>
        );
    }

}
