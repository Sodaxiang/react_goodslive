import React, {Component} from 'react';
import DetailDataView from './DetailDataView';
import { getHouseDetail, getHouseComment } from '../../../network/detail';

class DetailData extends Component{
    constructor(props) {
        super(props);
        this.state={
            houseData:{},
            comments:[]
        }
    }
    componentDidMount(){ 
        // 获取房屋详细信息
        getHouseDetail(this.props.id)
           .then(res=>{
               this.setState({
                   houseData: res
               })
           })
        // 获取评论信息
        getHouseComment(this.props.id)
            .then(res=>{
                this.setState({
                    comments: res.data
                });
            })
    }
    render(){
        return(
            this.state.houseData.imgs?
           <DetailDataView history={this.props.history} houseData={this.state.houseData} comments={this.state.comments}/>
           :
           <div>数据加载中</div>
        )
    }
}

export default DetailData;