import React, {Component} from 'react';

import './style.less';

class SimpleHeader extends Component {
    clickBackHandler = ()=>{
        this.props.history.goBack();
    }
    render(){
        return(
          <div id="simple-header">
              <div className="back-icon" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"></i>
             </div>
             <h2 className="title">
                 {this.props.title}
             </h2>
             
          </div>
        )
    }
}

export default SimpleHeader;