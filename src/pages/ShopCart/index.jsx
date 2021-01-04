import React, {Component} from 'react';
import ShopCartHeader from '../../components/common/SimpleHeader';
import UserView from './UserView';
import OrderView from './OrderView';
import { connect } from 'react-redux';
import { getCartList } from '../../network/cart';


class ShopCart extends Component {
    constructor(props){
        super(props);
        this.state ={
            orderList:[]
        }
    }
    componentDidMount(){
        if(!Object.keys(this.props.user).length){
            this.props.history.push('/login');
            return;
        }
        getCartList(this.props.city.cityName)
           .then( res => {
               this.setState({
                   orderList: res
               })
           })
    }
    render(){
        return (
            <div>
                <ShopCartHeader title="购物车" history={this.props.history}/>
                <UserView city={this.props.city} user={this.props.user}/>
                {this.state.orderList.length ?
                 <OrderView orderList={this.state.orderList} user={this.props.user}/> 
                 :
                 <div>数据加载中....</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.city,
        user: state.user
    }
}
export default connect(mapStateToProps)(ShopCart);