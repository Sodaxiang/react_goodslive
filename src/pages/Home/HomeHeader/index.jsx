import React, { Component } from 'react';
import './style.less';
import Header from '../../../components/common/Header';
import { Link } from 'react-router-dom';
class HomeHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchContent: ''
        }
    }
    handleInput = (e) =>{
        this.setState({
            searchContent: e.target.value
        })
    }
    searchHandler = e =>{
        if(e.keyCode === 13){
            this.props.history.push(`/search/${this.state.searchContent}`)
        }
    }
   
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
                   <input 
                       type="text" 
                       value={this.state.searchContent} 
                       placeholder="搜索您想住的区域或小区" 
                       onInput={this.handleInput}
                       onKeyUp={this.searchHandler}/>
                   <i className="icon-search"></i>
               </div>
            </div>
        );
        const right = (
            <Link className="home-header-right" to="/shopcart">
                 <i className="iconfont icon-car"></i>
            </Link>
           
        )
        return(       
            <Header left={left} middle={middle} right={right}/>     
        )
    }
}


export default HomeHeader;