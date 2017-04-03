import React, {Component} from 'react';
import './home_page.css';
import Score from './score'
import Title from './title'
import SalaryIncrease from './salary_increase'
import MinusItem from './minus_item'
import tian from './img/tian.png';
import jian from './img/01.png';
import { Router, Route, hashHistory ,Redirect,IndexRoute} from 'react-router';
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.clickTwo=this.clickTwo.bind(this);

    }


    render() {
        // console.log(this.props.Chcolor);
        return (
           <div className="middle">
                <div className="middle-inner">
                    <Score score={this.props.student.score}
                           clickTwo={this.clickTwo}
                           colors="#eed63b"
                           namea="查看详情>>"
                           topa="本教学周期薪酬"
                    />
                    <Title name="奖励加薪项目" color="#eed63b" imga={tian}/>
                    <ul className="bonus-items">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==1){
                                    return <SalaryIncrease reward={obj}
                                                           key={index}
                                                           showMask={this.props.showMask}
                                                           obj={obj}
                                                           changeContorl={this.props.changeContorl}
                                                           index={index}
                                                           numColor={this.props.numColor}
                                                           chColor={this.props.chColor}


                                    />
                                }

                            },this)
                        }
                    </ul>
                    <Title  name="惩罚减薪项目" color="#544b14" imga={jian}/>
                    <ul className="minus-item">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==2){
                                    return <MinusItem reward={obj}
                                                           key={index}
                                                      showMask={this.props.showMask}
                                                      index={index} num={this.props.num}
                                                      changeContorl={this.props.changeContorl}/>
                                }

                            },this)
                        }

                    </ul>
                </div>
           </div>
        );
    }
    clickTwo(){
        if(this.props.location.pathname=="/student/repos"){
            hashHistory.push("/student/three")
        }else{
            hashHistory.push("/student/repos")
        }
    }

}

