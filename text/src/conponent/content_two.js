import React, {Component} from 'react';
import './home_page.css';
import Manage from '../norepeat/manage'
import Title from '../conponent/title'
import tian from './img/tian.png';

export default class ContentTwo extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className="middle">
                <div className="middle-inner">
                    <Title name="奖励加薪项目" color="#eed63b" imga={tian}/>
                    <ul className="bocbtom">
                        {
                         this.props.students.map((obj,index)=>{
                                    return(
                                        <Manage student={obj}
                                                key={index}
                                                index={index}
                                                showMask={this.props.showMask}
                                                changeIndex={this.props.changeIndex}
                                                changeColor={this.props.changeColor}
                                                changeNum={this.props.changeNum}
                                                changeContorl={this.props.changeContorl}
                                                     />
                                    )
                          },this)
                        }
                        <li className="gengduo" onClick={this.props.showMask}>
                           +
                        </li>
                    </ul>

                </div>
            </div>
        );
    }


}
