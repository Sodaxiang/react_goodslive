import React from 'react';
import "./style.less"

export default class HotCity extends React.Component {

    clickHandler(cityName) {
        this.props.cityNameHandler(cityName);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span>北京</span>
                    </li>
                    <li>
                        <span>上海</span>
                    </li>
                    <li>
                        <span>杭州</span>
                    </li>
                    <li>
                        <span>广州</span>
                    </li>
                    <li>
                        <span>苏州</span>
                    </li>
                    <li>
                        <span>深圳</span>
                    </li>
                    <li>
                        <span>南京</span>
                    </li>
                    <li>
                        <span>天津</span>
                    </li>
                    <li>
                        <span>重庆</span>
                    </li>
                    <li>
                        <span>厦门</span>
                    </li>
                    <li>
                        <span>武汉</span>
                    </li>
                    <li>
                        <span>西安</span>
                    </li>
                </ul>
            </div>
        )
    }
}