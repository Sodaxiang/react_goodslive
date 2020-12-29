import React, {Component} from 'react';
import classnames from 'classnames';

import './style.less';
class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }
    handleTabChange = (index) =>{
        this.setState({
            currentIndex: index
        });
    }
    render() {
        const { currentIndex } = this.state;

        return(
            <div className="tab">
                <div className="tab-title-wrap">
                   {React.Children.map(this.props.children, (element, index)=>{
                      return (
                          <div 
                             className={classnames('tab-title', {'active': index===currentIndex})}
                             onClick={()=>this.handleTabChange(index)}>
                              {element.props.tabname}
                          </div>
                      )
                   })}
                </div>
                <div className="tab-item-wrap">
                  {
                      React.Children.map(this.props.children, (element, index)=>{
                          return(
                              <div className={index===currentIndex ? 'show': 'hide'}>
                                   {element.props.children}
                              </div>
                          )
                      })
                  }
                </div>
            </div>
        )
    }
}

export default Tabs;