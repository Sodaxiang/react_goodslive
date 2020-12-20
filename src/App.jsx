import React from 'react';
import AppRouter from './router/AppRouter';
import {initCity} from './actions/city';
import {connect} from 'react-redux';

class App extends React.Component{
  componentDidMount(){
    // 获取地理位置并初始化
    const city = localStorage.getItem('city') || '广州';
    this.props.initCity({cityName:city});
  }
  render(){
    return (
      <div>
        <AppRouter/>
      </div>
    )
  } 

}

export default connect(null, {initCity})(App);
