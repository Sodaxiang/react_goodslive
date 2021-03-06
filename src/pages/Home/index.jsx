import React from 'react';
import HomeHeader from './HomeHeader';
import Swiper from '../../components/common/Swiper';
import HomeHot from './HomeHot';
import FootNav from '../../components/FootNav';

import {connect} from 'react-redux';

// 引入图片
import banner1 from "../../static/images/banner1.png";
import banner2 from "../../static/images/banner2.png";
import banner3 from "../../static/images/banner3.png";


class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader city={this.props.city} history={this.props.history}/>
                <Swiper banners={[banner1,banner2,banner3]}/>
                <HomeHot />
                <FootNav/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        city: state.city,
    }
}

export default connect(mapStateToProps)(Home);