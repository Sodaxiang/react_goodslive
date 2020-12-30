import React, {Component} from 'react';
import './style.less';
import Star from '../../../../../components/common/Star';

class CommentItem extends Component {
    render(){
        const {data} = this.props;
        return(
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {data.username}
                </h3>
                <Star rate={data.star}/>
                <p>{data.comment}</p>
            </div>
        )
    }
}

export default CommentItem;
