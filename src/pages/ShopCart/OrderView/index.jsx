import React, {Component} from 'react';
import OrderItem from './OrderItem';

class CartView extends Component {
    render(){
        return(
            <div>
                {this.props.orderList.map(item => {
                    return(<OrderItem data={item} key={item.id}  user={this.props.user.username} />)
                })}
            </div>
        )
    }
}

export default CartView;