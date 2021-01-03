import React, {Component} from 'react';
import './style.less';

class LoginView extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }
    handleChange = e => {
        this.setState({
            username: e.target.value,
        })
    }
    loginHandler = _ => {
        this.props.loginHandler(this.state);
    }
    render(){
        return(
            <div id="login-container">
                  <h3>登录</h3>
                 <div className="input-container phone-container">
                 <i className="icon-tablet"></i>
                     <input 
                        type="text"
                        placeholder="请输入手机号"
                        onChange={this.handleChange}
                        value={this.state.username}
                        />
                 </div>
                 <div className="input-container password-container">
                     <i className="icon-key"/>
                     <button>发送验证码</button>
                     <input type="text" placeholder="输入验证码"/>
                 </div>
                 <button 
                     className="btn-login"
                     onClick={this.loginHandler}
                     disabled={!this.state.username.length} >登录</button>
            </div>
        )
    }
}

export default LoginView;