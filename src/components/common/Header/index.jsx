import React, { Component } from 'react';
import './style.less';
class Header extends Component {
    render(){
        return (
            <div id="header">
                <div className="left">{this.props.left}</div>
                <div className="middle">{this.props.middle}</div>
                <div className="right">{this.props.right}</div>
            </div>
        )
    }
}

export default Header;