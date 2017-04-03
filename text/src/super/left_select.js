import React, {Component} from 'react';
import '../conponent/home_page.css';
import LeftBoxTop from '../conponent/left_box_top'
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
                <LeftBoxBotm/>
            </div>
        );
    }


}