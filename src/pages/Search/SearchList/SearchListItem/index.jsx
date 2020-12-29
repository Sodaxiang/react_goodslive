import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.less';
class SearchListView extends Component {
   
    render(){
        let item = this.props.data;
        return(
            <div className="list-item">
                <Link to={`/detail/${item.id}`}>
                    <img src={item.img} alt=""/>
                    <div className="mask">
                        <div className="left">
                            <p>{item.title}</p>
                            <p>{item.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="right">
                                <div className="btn">
                                    {item.rentType}
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: item.price }} className="price" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default SearchListView;