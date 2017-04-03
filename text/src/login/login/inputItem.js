/**
 * Created by Administrator on 2017/2/21 0021.
 */
import React, {Component, PropTypes} from 'react';
import './login.css';

export default class inputItem extends Component {
    render() {
        if(this.props.color=="yellow"){
            return (
                <button className="button-item" onKeyDown={this.props.login} onClick={this.props.click} >登录</button>
            )
        }else{
                if(this.props.prompt=="用户名"){
                    return(
                        <input type="text" className="input-item" defaultValue={this.props.name} placeholder={this.props.prompt}/>
                    )
                }else {
                    return(
                        <input type="password" className="input-item" defaultValue={this.props.name} placeholder={this.props.prompt}/>
                        )

                }


        }

    }
}