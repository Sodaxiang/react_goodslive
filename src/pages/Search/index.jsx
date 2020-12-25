import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchList from './SearchList';

import './style.less';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchContent:''
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleSearch(content){
        this.setState({
            searchContent: content
        });
    }
    render(){
        return (
            <div>
                <SearchHeader 
                searchContent={this.props.match.params.content} 
                history={this.props.history}
                handleSearch={(content)=>this.handleSearch(content)}
                />
                <SearchList searchContent={this.props.match.params.content}/>
            </div>
        )
    }
}

export default Search;