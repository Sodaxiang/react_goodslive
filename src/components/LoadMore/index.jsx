import React, {Component} from 'react';
import './style.less';
import { throttle } from '../.../../../utils';

export default class LoadMore extends Component {
    constructor(props){
        super(props);

        this.load = React.createRef();
    }
    componentDidMount() {
        const winH = document.documentElement.clientHeight;
        const scrollFn = () =>{
        //    console.log( this.load.current.getBoundingClientRect().top,winH)
           console.log( this.load.current.getBoundingClientRect().top,winH)
            if(this.load.current.getBoundingClientRect().top< winH){
                // console.log("ll")
                this.props.loadMore();
            }
        }  
        window.onscroll = throttle(scrollFn, 1000);
    }
    componentWillUnmount(){
        window.onscroll = null;
    }
    render(){
        return (
            <div className="load-more" ref={this.load}>加载更多......</div>
        )
    }
}