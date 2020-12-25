import React, { Component } from 'react';
import './style.less';
import Header from '../../../components/common/Header';

class SearchHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            //将其初始化为首页输入的首页内容
            searchContent: props.searchContent
        }
    }
    clickBackHandler = ()=>{
        this.props.history.replace('/');
    }
    handleInput = (e) =>{
        this.setState({
            searchContent: e.target.value
        })
    }
    handleSearch = e =>{
        if(e.keyCode === 13){
            this.props.history.push(`/search/${this.state.searchContent}`)
            this.props.handleSearch(this.state.searchContent);
        }
    }
    render(){
    
        const left = (
                <span className="back-icon" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"></i>
                </span>
        );
        const middle = (
               <div className="search-container">
                   <input 
                       type="text" 
                       value={this.state.searchContent} 
                       placeholder="搜索您想住的区域或小区" 
                       onInput={this.handleInput}
                       onKeyUp={this.handleSearch}/>
                   <i className="icon-search"></i>
               </div>
        );
        return(       
            <Header left={left} middle={middle}/>     
        )
    }
}


export default SearchHeader;
