import React from "react"
import {getHomeHot1, getHomeHot2} from '../../../network/home';
import HomeHotView from "./HomeHotView"

export default class HomeHot extends React.Component {

    constructor(){
        super();
        this.state = {
            homehot1:[],
            homehot2:[]
        }
    }

    componentDidMount() {
        getHomeHot1().then(
            data=>{
                this.setState({
                    homehot1:data
                })
            }
        )
        getHomeHot2().then(
            data=>{
                this.setState({
                    homehot2:data
                })
            }
        )
    }

    render() {
        const { homehot1,homehot2 } = this.state;
        return (
            <div>
                
                {
                    homehot1.length > 0?
                    <HomeHotView data={ homehot1 } title={ '热销单品' }/>
                    : <div>正在请求数据</div>
                }

                {
                    homehot2.length > 0?
                    <HomeHotView data={ homehot2 } title={ '家庭常用' }/>
                    : <div>正在请求数据</div>
                }

            </div>
        )
    }
}