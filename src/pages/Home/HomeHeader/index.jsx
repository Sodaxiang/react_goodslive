import React, { Component } from 'react';
import './style.less';
import Header from '../../../components/common/Header';
import { Link } from 'react-router-dom';
class HomeHeader extends Component{
  
    render(){
        const left = (
            <div className="home-header-left" onClick={this.hanldeCityClick}>
                 <Link to="/city"><span>{this.props.city.cityName}</span></Link>
                 <i className="icon-angle-down"></i>
            </div>
        );
        const middle = (
            <div className="home-header-middle">
               <div className="search-container">
                   <input type="text" placeholder="搜索您想住的区域或小区"/>
                   <i className="icon-search"></i>
               </div>
            </div>
        );
        const right = (
            <div className="home-header-right">
                 <i className="iconfont icon-car"></i>
            </div>
           
        )
        return(       
            <Header left={left} middle={middle} right={right}/>     
        )
    }
}


export default HomeHeader;