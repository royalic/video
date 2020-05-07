import logo from './logo.svg';
import React, { Component } from 'react';
import { Select } from 'antd';
class login extends Component {
    constructor(props){
       super(props);
       this.state={};
    }
  render() {
  return (
<div>
     <div className='onclick2'>
     <form action="http://127.0.0.1:8081/login" method='post'>
        用户名：<input type='text' name='name' style={{width:'100%',height:'30px',}}/><br/>
        密  码：<input type='password' name='password' style={{width:'100%',height:'30px',}}/><br/>
        <input type="submit" value='登陆'style={{width:'100%',height:'30px',background:'#38f',}}/><br/>
     </form>
     </div>
</div>
  );
}
}
export default login;
