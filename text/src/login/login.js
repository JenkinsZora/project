/**
 * Created by Administrator on 2017/2/16 0016.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import ReactDOM from 'react-dom'
import InputItem from './login/inputItem'
import Identifying from './login/identifying'
import SelectItem from './login/selectItem'
import './login/login.css';
import {teacherLoginData} from './actions.js'

class login extends Component {

    constructor(props) {
        super(props);
        this.login=this.login.bind(this);
        this.getIden = this.getIden.bind(this);
        this.keyLogin = this.keyLogin.bind(this);
        this.state = {
            college: "数字媒体web",
            authority: "教师",
            username: "admin",
            password: "admin",
            id: ""
        };
    }

    login() {
            let username = ReactDOM.findDOMNode(this.refs.username).value;
            let password = ReactDOM.findDOMNode(this.refs.password).value;
            let authority = ReactDOM.findDOMNode(this.refs.authority).value;
            let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;

            if ((identify.toLowerCase() == this.state.id.toLowerCase())){
                fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=1`)
                    .then(json=>json.json())
                    .then(json=> {
                        console.log(json);
                        if (json.status == 201) {
                            alert(json.message);
                        } else if (json.status == 200) {
                            this.props.onSuper(json);
                            if (authority == 1) {
                                hashHistory.push("/student/repos");
                            }else if(authority == 2){
                                hashHistory.push("/super");
                            }

                        }
                    }, err=> {
                        alert("服务器异常");
                    })

            }else{
                alert("验证码有误")
            }
        }




    render(){
        return (
            <div style={{height:"100%"}}>
                {
                    this.state.laissezPasser ? <div></div> : <div className="login-bg">
                        <div className="login-box" onKeyDown={this.keyLogin}>
                            <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                        ref="college"
                            />
                            <SelectItem prompt={['学生','教师','超级管理员']}
                                        ref="authority"
                            />
                            <InputItem prompt="用户名"  ref="username" name=""/>
                            <InputItem prompt="密码" ref="password" name=""/>
                            <Identifying ref="identify" getId={this.getIden}/>
                            <InputItem prompt="登陆" login={this.keyLogin} click={this.login} color="yellow"/>
                        </div>
                    </div>
            }
            </div>);
    }


    keyLogin(event) {
        if (event.keyCode == 13) {
            this.login();
        }
    }

    getIden(value) {
        this.setState({
            id: value
        })
    }

}





function select(state) {
    return {
        loginData: state.loginData
    }
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};

export default connect(select,mapDispatchToProps)(login);