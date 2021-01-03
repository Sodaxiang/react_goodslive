import React, {Component} from 'react';

import './style.less';

class StoreBuyView extends Component {
    handleCollect = _=>{
       this.props.collectHandler();
    }
    buyHandler = _ => {
        this.props.buyHandler();
    }
    render(){
        return (
            <div className="buy-store-container">
                <div className="collect" onClick={this.handleCollect}>
                    {
                        this.props.isCollected ?
                        <button className="o">取消收藏</button>
                        :
                        <button>收藏</button>
                    }
                    
                </div>
                <div className="buy" onClick={this.buyHandler}>
                    <button>购买</button>
                </div>
            </div> 
        )
    }
}

export default StoreBuyView;
