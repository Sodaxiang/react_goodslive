import React, {Component} from 'react';
import LoginView from './LoginView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/user';

class Login extends Component {

    loginHandler = (user) =>{
        this.props.userActions.userLogin(user);
        this.props.history.goBack();
    }
    render(){
        return(
            <LoginView loginHandler={this.loginHandler}/>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);