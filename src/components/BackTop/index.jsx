import React, {Component} from 'react';
import './style.less';
import topBtn from '../../static/images/top.svg';
import { throttle } from '../.../../../utils';
import classnames from 'classnames';

class BackTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            top: 0,
        }
    }
    componentDidMount(){
        const scrollFn = _ => {
            console.log(document.documentElement.scrollTop)
            this.setState({
                top: document.documentElement.scrollTop || document.body.scrollTop
            });
        }
        window.onscroll = throttle(scrollFn, 1000)
    }
    scrollToTop = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 0) {
                window.scrollTo(0, scrollTop - scrollTop / 9);
                window.requestAnimationFrame(this.scrollToTop)
            }
        }
    componentWillUnmount(){
        window.onscroll = null;
    }
    render(){
        return(
            
            <div className={classnames("back-top", this.state.top > 1500? "show":"hide" )} onClick={this.scrollToTop}>
               <img src={topBtn} alt="back_top"/>
            </div>
        )
    }
}

export default BackTop;
