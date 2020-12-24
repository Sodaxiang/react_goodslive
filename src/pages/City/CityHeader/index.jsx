import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../../../components/common/Header';
import './style.less';

class CityHeader extends Component {
    clickBackHandler = ()=>{
        this.props.history.goBack();
    }
    render(){
        const left = (
                 <span className="back-icon" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"></i>
                </span>
        )
        const middle = (
            <h2>
                {this.props.title}
            </h2>
        )
        return(
            <Header left={left} middle={middle} />
        )
    }
}

export default  withRouter(CityHeader);