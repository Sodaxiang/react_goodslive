import React, {Component} from 'react';
import './style.less';
import { throttle } from '../.../../../utils';
import topBtn from '../../static/images/top.svg';
import classnames from 'classnames';

export default class LoadMore extends Component {
    constructor(props){
        super(props);

        this.load = React.createRef();
        this.state = {
            top: 0
        }
    }
    scrollToTop = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            window.scrollTo(0, scrollTop - scrollTop / 9);
            window.requestAnimationFrame(this.scrollToTop)
        }
    }

    componentDidMount() {
        const winH = document.documentElement.clientHeight;
        const scrollFn = () =>{
            this.setState({
                top: document.documentElement.scrollTop || document.body.scrollTop
            });
            if(this.load.current.getBoundingClientRect().top< winH){
                this.props.loadMore();
            }
        } 
        window.onscroll = throttle(scrollFn, 1000);
    }
    componentWillUnmount(){
        // 取消滚动事件
        window.onscroll = null;
    }
    render(){
        return (
            <>
            <div className="load-more" ref={this.load}>加载更多......</div>
            <div className={classnames("back-top", this.state.top > 1500? "show":"hide" )} onClick={this.scrollToTop}>
              <img src={topBtn} alt="back_top"/>
            </div>
           </>

        )
    }
}