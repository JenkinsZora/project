import React, {Component} from 'react';
import '../conponent/home_page.css';
import qian from '../conponent/img/b.gif';


export default class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="middle-banner" style={{backgroundColor:this.props.colors}}>
                <div className="middle-banner-inner">
                    <div className="money">
                        <img src={qian} alt=""/>
                        </div>
                        <h1 className="banner-title">本教学周期薪酬</h1>
                        <h1 className="banner-score"><span>￥</span>{ this.props.score}</h1>
                    <h6 className="looksee" onClick={this.props.clickTwo}>{this.props.gscore}</h6>
                    </div>
                </div>
        );
    }


}

