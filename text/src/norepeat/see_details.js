import React, {Component} from 'react';
import '../conponent/home_page.css';
import qian from './b.gif';

export default class Seedetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="geren">
                <div className="letopa">
                    <div className="jianli">
                        {this.props.message.sname}
                    </div>
                    <p>学号： {this.props.message.sno}</p>
                    <p>市场部：{this.props.message.market}</p>
                    <p>入学日期：{this.props.message.updateTime}</p>
                    <p>学制：{this.props.message.term}</p>
                </div>
                <div className="rigtop">
                    <div className="leftllaa">
                        <h1>本教学周期薪酬</h1>
                    </div>
                    <div className="qian">
                        <img src={qian} alt=""/>
                    </div>
                    <div className="rightt">
                        <span className="xiaoqian">￥</span>
                        <span>{this.props.message.score}</span>
                    </div>
                </div>
            </div>
        )
    }
}
