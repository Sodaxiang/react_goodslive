import React, {Component} from 'react';
import Header from '../../../components/common/Header';
import './style.less';

export default class CityHeader extends Component {
    render(){
        const left = (
                 <span className="back-icon" onClick={ this.clickBackHandler }>
                 aaaa
                    <i className="icon-chevron-left"></i>
                </span>
        )
        const center = (
            <h2>
                {this.props.title}
            </h2>
        )
        return(
            // <Header left={left} center={center} />
            <div>sjsjsj</div>
        )
    }
}