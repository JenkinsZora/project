import React, {Component} from 'react';
import '../conponent/home_page.css';
export default class leftBoxBotm extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        var names = this.props.grades;
        return(
            <ul className="left-box-bottom">
                {
                    names.map(function(obj,index){
                        return (
                            <li key={index}>{names[index].gname}
                                <div className="left-box-bottom2"></div>
                            </li>
                        )
                    },this)
                }

            </ul>
        )
    }


}
