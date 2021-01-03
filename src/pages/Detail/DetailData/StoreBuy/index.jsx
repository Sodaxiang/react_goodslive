import React, {Component} from 'react';
import StoreBuyView from  './StoreBuyView';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as collectActions from '../../../../actions/collect';


class StoreBuy extends Component {

    state = {
        // state来存储其收藏的状态
        isCollected: false
    };
    componentDidMount(){
        // 组件以挂载便要判断组件是否收藏
        // 设置收藏的值
        this.setState({
            isCollected:this.isCollect()
        })
    }
    collectHandler = _ => {
        if(!Object.keys(this.props.user).length){
            this.props.history.push('/login');
        }else {
            if(this.state.isCollected){
                //取消收藏
                this.props.collectActions.cancelCollect({
                    houseid:this.props.houseid
                });
                this.setState({
                    isCollected: false
                });
        
            } else {
                // 收藏
                this.props.collectActions.setCollect({
                    ...this.props.user,
                    houseid:this.props.houseid
                });
                this.setState({
                    isCollected: true
                });
            }
            
        }
    }
    buyHandler = _ => {
        console.log('去购买')
    }

    // 判断该商品是否被收藏
    isCollect = _ =>{
        const houseid = this.props.houseid;
        const collect = this.props.collect;
        return collect.some(item=> item.houseid === houseid);
    }
    render(){
        return(
           <StoreBuyView
               isCollected = {this.state.isCollected}
               collectHandler={this.collectHandler}
               buyHandler={this.buyHandler}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        collect: state.collect
    }
}
const mapDispatchToProps = dispatch => {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StoreBuy));