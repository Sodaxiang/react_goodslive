import React, {Component} from 'react';
import './style.less';

class UserView extends Component {
    render(){
        const {username} = this.props.user;
        const {cityName} = this.props.city;
        return(
            <div className="user-view">
               <p>
                   <i className="icon-user"></i>&nbsp;
                   <span>{username}</span>
               </p>
               <p>
                   <i className="icon-map-marker"></i>&nbsp;
                   <span>{cityName}</span>
               </p>
            </div>
        )
    }
}

export default UserView;