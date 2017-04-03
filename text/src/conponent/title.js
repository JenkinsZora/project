import React, {Component} from 'react';
import './home_page.css';
export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="middle-title" style={{backgroundColor:this.props.color}}>
                <div className="list-icon">
                    <img src={this.props.imga}alt=""/>
                </div>
                <h1>
                    {
                    this.props.name
                     }
                </h1>
            </div>
        );
    }


}

