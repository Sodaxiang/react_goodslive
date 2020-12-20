import React, {Component} from 'react';
import {connect} from 'react-redux';

import CityHeader from './CityHeader';
import CityCurrent from './CityCurrent';
import CityHot from './CityHot';
class City extends Component {
    
    render(){
        return(
            <div>
                <CityHeader title="城市选择"/>
                <CityCurrent city={this.props.city.cityName}/>
                <CityHot/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.city
    }
}
export default connect(mapStateToProps)(City);