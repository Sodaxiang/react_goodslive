import React , { Component } from 'react';
import './style.less';
class Star extends Component {
    getMaxRate = _ => {
        return this.props.maxRate || 5;
    }
    getRate = _ => {
        return this.props.rate || 0;
    }

    getRatio = _ => {
       let ratio = Math.floor(this.getRate()/this.getMaxRate()*100);
       return ratio;
    }
    render(){
        return (
            <div className="star">
               <div className="light"></div>
               <div className="rate" style={{'width':`${this.getRatio()}%`}}></div>
            </div>
        )
    }
}

export default Star;
