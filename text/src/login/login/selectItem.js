/**
 * Created by Administrator on 2017/2/22 0022.
 */
import React, {Component, PropTypes} from 'react';
import './login.css';


export default class inputItem extends Component {
    constructor(props) {
        super(props);
        this.a = this.a.bind(this);
    }
    a(){
        console.log(this.refs.select)
    }
    render() {
        return (
            <select type="text" className="select-item"  defaultValue="1">
                {
                    this.props.prompt.map((val,index)=><option key={val} value={index}>{val}</option>)
                }

            </select>
        )
    }
}