import logo from './logo.svg';
import React, { Component } from 'react';
import { Select } from 'antd';
class register extends Component {
  render() {
  return (
<div>
        <br/>
        <br/>
        <br/>
        <div class="onclick2">

            <form action="" method="post" class="form-group">
                <h1>注册</h1>
                <div>
                <label for="username">昵称：</label>
                <input type="text" placeholder="昵称" name="username" id="username" autofocus/><br/>
                </div>
                <div>
                <label for="email">邮箱：</label>
                <input type="text" placeholder="邮箱" name="email" id="email"/><br/>
                </div>
                <div>
                <label for="email">手机：</label>
                <input type="text" placeholder="手机" name="tel" id="tel"/><br/>
                </div>
                <div>
                <label for="pwd1">密码：</label>
                <input type="password" placeholder="密码" name="pwd" id="pwd1"/><br/>
                </div>
                <div>
                <label for="pwd2">密码：</label>
                <input type="password" placeholder="确认密码" name="pwd" id="pwd2"/><br/>
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
</div>
  );
}
}
export default register;
