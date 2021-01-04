import React, { Component } from 'react';
import './style.less';
import {addComment} from '../../../../network/cart';

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentState: 0,
            commentValue:''
        }
        // this.commentText = React.createRef();
    }
    componentDidMount(){
        this.setState({
            commentState: this.props.data.commentState
        })
    }
    handleChange = e =>{
        this.setState({
            commentValue: e.target.value
        })
    }
    commentHandler =  _ => {
        this.setState({
            commentState: 1
        });
    }
    submitCommentHandler = houseid => {
        const data ={
            commentValue: this.state.commentValue,
            user: this.props.user,
            houseid,
        };
        console.log(data)
        addComment(data)
          .then(res => res)
          .then(data => {
              alert(data.msg);
              this.setState({
                  commentState: 2
              })
          })
    }
    hideComment = _ => {
        this.setState({
            commentState: 0
        });
    }
    render(){
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                            this.state.commentState === 0 ?
                            <button className="btn" onClick={this.commentHandler}>评价</button>
                            : 
                            this.state.commentState === 1 ? 
                            <button className="btn" >评价中</button>
                            :
                            <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    this.state.commentState === 1 &&
                    <div className="comment-text-container">
                    <textarea 
                        style={{ width: '100%', height: '80px' }} 
                        className="comment-text" 
                        // ref={ this.commentText }
                        value={this.state.commentValue}
                        onChange={this.handleChange}
                        ></textarea>
                    <button disabled={ !this.state.commentValue.length } className="btn" onClick={()=>this.submitCommentHandler(data.id)}>提交</button>
                    &nbsp;
                            <button className="btn unseleted-btn" onClick={this.hideComment}>取消</button>
                    </div>
                }
            </div>
        )
    }
}

export default OrderItem;