import React, {Component} from 'react';
import './home_page.css';
import LeftBoxTop from './left_box_top'
import LeftBoxBotm from './left_box_botm'
import { Router, Route, hashHistory ,Redirect,IndexRoute} from 'react-router';
export default class LeftSelect extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="left-box">
                <LeftBoxTop/>
                {
                    this.props.pathName=="/student/repos"||this.props.pathName=="/student/three"?<ul className="left-box-bottom">
                        {
                            this.props.students.map((obj,index)=>{
                                return(
                                    <LeftBoxBotm student={obj} key={index}
                                                 changeIndex={this.props.changeIndex}
                                                 index={index}
                                                 clickedStudent={this.props.clickedStudent}/>
                                )
                            },this)
                        }
                    </ul>:<ul className="left-box-bottom">
                        <li>学生管理</li>
                    </ul>
                }

            </div>
        );
    }


}