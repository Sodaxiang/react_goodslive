import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';

import './style.less';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Swiper extends Component {
   constructor(props){
     super(props);
     this.state = {
       currentIndex: 0,
     }
   }
   onChangeIndex = (index) =>{
    this.setState({
      currentIndex: index,
     });
  }
  onPaginationClick = (index) =>{
    this.setState({
      currentIndex: index,
    })
  }
    render(){
        return(
          <div className="swiper">
                <AutoPlaySwipeableViews 
                  resistance
                  interval={2000} 
                  enableMouseEvents 
                  className="swiper"
                  onChangeIndex={this.onChangeIndex}
                  index={this.state.currentIndex}
                  >
                  {this.props.banners.map((ele, index)=>{
                    return (
                      <div key={index} className="swiper-item">
                        <img src={ele} alt="banner"/>
                      </div>
                    )
                  })}
              </AutoPlaySwipeableViews>
              <Pagination dots={this.props.banners.length} currentIndex={this.state.currentIndex} onPaginationClick={this.onPaginationClick}/>
          </div>
        )
    }
}

export default Swiper;