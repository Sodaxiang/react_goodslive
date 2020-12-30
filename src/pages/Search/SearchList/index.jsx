import React, {Component} from 'react';
import SearchListItem from './SearchListItem';
// import BackTop from '../../../components/BackTop';
import LoadMore_BackTop from '../../../components/LoadMore';
import {connect} from 'react-redux';
import { getSearchContent } from '../../../network/search';
import './style.less';

class SearchList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchList:[],
            hasMore: false,
            page: 0,
        }
    }
    componentDidMount(){
        //使用localStorage的原因，避免存储再redux中city信息在页面刷新后丢失
        this.getContent( localStorage.getItem('city'), this.props.searchContent, 0 );
    }
    componentWillUpdate(nextProps){
        if(nextProps.searchContent === this.props.searchContent) return;
        this.setState({
            searchList: [],
            page: 0
        });
        this.getContent(localStorage.getItem('city'), nextProps.searchContent, 0);
    }
    componentWillUnmount(){
        // 清除
        this.setState = (state,callback) => {
            return;
        }
    }
    loadMore=()=>{
        this.getContent( localStorage.getItem('city'), this.props.searchContent, this.state.page);
    }
    getContent = (city, content, page) =>{
        getSearchContent(city, content, page).then(
            res =>{
                this.setState({
                    searchList: this.state.searchList.concat(res.data),
                    hasMore: res.hasMore,
                    page: this.state.page + 1
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
                   this.state.hasMore ?<LoadMore_BackTop loadMore={this.loadMore}/>:<p>已经被你看光了~</p>
               }
               {/* <BackTop/> */}
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