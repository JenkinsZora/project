/**
 * Created by Administrator on 2017/3/30.
 */
import React, {Component} from 'react';
import '../conponent/home_page.css';
import {connect} from'react-redux'
import {teacherLoginData} from './actions';
import SuperRight from './super';
import Head from './head';
import LeftSelect from'./left_select';


 class SuperAll extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Head store={this.props}/>
                <SuperRight store={this.props}/>
                <LeftSelect/>
            </div>
        )
    }
}
function maneger(state) {
    console.log(state);
    return {
        grade:state.teacherLoginData.grade
    }
}
const mapDispatchToProps = {
    onLink:teacherLoginData
};

export default connect(maneger,mapDispatchToProps)(SuperAll);

