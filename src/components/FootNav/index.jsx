import React, {Component} from 'react';
import './style.less';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class FootNav extends Component{
   
    render(){
        const {path} = this.props.match;
        return (
          <div className="nav-footer">
              <ul>
                  <li>
                      <NavLink  to="/" exact 
                      className={path==="/"? 'active':''} 
                      >
                          <i className="iconfont icon-home"></i>
                          首页
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/mall"
                      className={path==="/mall"? 'active':''} 
                      > 
                          <i className="iconfont icon-shop"></i>
                          商城
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/service"
                      className={path==="/service"? 'active':''} >
                          <i className="iconfont icon-trophy"></i>
                          生活服务
                      </NavLink>
                  </li>
                  <li>
                     <NavLink to="/profile"
                     className={path==="/profile"? 'active':''} >
                          <i className="iconfont icon-team"></i>
                           我的
                      </NavLink>
                  </li>
              </ul>
          </div>  
        )
    }
}

export default withRouter(FootNav);