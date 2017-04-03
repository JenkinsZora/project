import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home_page.css';
import guan4 from './img/27.png';
class Tankuang extends Component {
    render() {
        return (
            <div className="zhezhao"style={{display:this.props.flag==false?"none":"block"}} >
                <div className="zhezhaobg">
                    <div className="nonedivaa">
                        <div className="tankuang">
                            <h2>{this.props.reward.type==1?"奖励加薪项目":"惩罚减薪项目"}</h2>
                        </div>
                        <div className="juzhong">
                            <li>
                                <p>{this.props.reward.name}</p>
                                <div className="rqian">
                                    <span className="jajia">{this.props.reward.type==1?"+":""}</span>
                                    <span>{this.props.reward.score}</span>
                                    <img src={guan4} alt=""/>
                                </div>
                            </li>
                            <input type="button" className="zuobtnaa" value="取消" onClick={this.props.cancelMask}/>
                            <input type="button" className="youbtn" value="确定"
                                   onClick={()=>this.props.changeScore(this.props.reward)}                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default Tankuang;