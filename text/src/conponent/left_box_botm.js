import React, {Component} from 'react';
import './home_page.css';
export default class leftBoxBotm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <li onClick={()=>this.props.changeIndex(this.props.index)}
               style={{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":""}}>
               {
                   this.props.student.sname
               }
           </li>
        );
    }


}
