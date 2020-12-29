import React, {Component} from 'react';
import CommentItem from './CommentItem';
import './style.less';

class CommentView extends Component {
    render(){
        let {comments} = this.props;
        return(
            <div className="comment-list">
                {comments.map((item, index) => {
                    return <CommentItem key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default CommentView;
