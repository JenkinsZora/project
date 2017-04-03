/**
 * Created by Administrator on 2017/3/30.
 */
import React, {Component} from 'react';
import '../conponent/home_page.css';
import Title from '../conponent/title';
import SchoolTerm from '../norepeat/school-term'
import TeacherTwo from './teacher_two'
import Score from './score'
import tian from '../conponent/img/teacher_23.png';
export default class SuperRight extends Component{
    render(){
        return(
            <div className="flex2">
                <div className="innerBoxRight">
                    <SchoolTerm/>
                    <Title name="班级教师" color="#eed63b" imga={tian}/>
                    <TeacherTwo store={this.props.store}/>
                    <Score/>
                </div>

            </div>
        )
    }
}