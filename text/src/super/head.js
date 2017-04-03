import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../conponent/home_page.css';
import logob from '../conponent/img/logo.png';
export default class Head extends Component {  /**/

        render(){
            return (
                <div className="header">
                    <div className="logo">
                        <img src={logob} alt=""/>
                    </div>
                    <div className="teaching-cycle">
                        <span>数字媒体学院：</span>
                        <span>{this.props.store.grade.teacher}</span>
                        <span>|</span>
                        <span></span>
                    </div>
                    <div className="link">
                        <img src="" alt=""/>
                    </div>
                </div>
            );
        }

}

