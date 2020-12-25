import React, {Component} from 'react';
import SearchListItem from './SearchListItem';
import LoadMore from '../../../components/LoadMore';
import {connect} from 'react-redux';
import { getSearchContent } from '../../../network/search';
import './style.less';

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchList:[],
            hasMore: false,
        }
    }
    componentDidMount(){
        //使用localStorage的原因，避免存储再redux中city信息在页面刷新后丢失
        this.getContent( localStorage.getItem('city'), this.props.searchContent);
    }
    componentWillUpdate(nextProps){
        if(nextProps.searchContent === this.props.searchContent) return;
        const city = this.props.city.cityName;
        this.getContent(localStorage.getItem('city'), nextProps.searchContent);
    }
    loadMore=()=>{
        this.getContent( localStorage.getItem('city'), this.props.searchContent);
    }
    getContent = (city, content) =>{
        getSearchContent(city, content).then(
            res =>{
                this.setState({
                    searchList: this.state.searchList.concat(res.data),
                    hasMore: res.hasMore
                });
            }
        )
    }

    render(){
        return(
            <div className="search-list">
               {this.state.searchList.map((item, index) => {
                   return <SearchListItem data={ item } key={index}/>
               })}
               {
                   this.state.hasMore ?<LoadMore loadMore={this.loadMore}/>:<p>已经被你看光了~</p>
               }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        city: state.city,
    }
}
export default connect(mapStateToProps)(SearchList);