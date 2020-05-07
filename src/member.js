import logo from './logo.svg';
import React, { Component } from 'react';
import { Select } from 'antd';
class member extends Component {
  render() {
  return (
     <div class='memberinfo'>
         <div class='person' style={{width:'25%',height:'100%',float:'left',}}> 
            < div style={{margin:'20% 0 0 0',height:'20%',width:'80%',}}>
                <h1>个人信息</h1>
            </div>
            <div style={{margin:'0 0 0 0',height:'20%',}}>
                <h1>信息修改</h1>
            </div>
            <div>
                <h1>我的分享</h1>
            </div>
            <div>
                <h1>我的收藏</h1>
            </div>
         </div>
         <div style={{width:'50%',height:'100%',float:'left',}}>
            <div class='personinfo'>123</div>
            <div class='changeinfo'>234</div>
            <div class='shareinfo'>345</div>
            <div class='likeinfo'>456</div>
         </div>
         <div style={{width:'25%',height:'100%',float:'left',}}>
            <div class='userimg'>123</div>
            <div class='username'>234</div>
            <div class='userinfo'>
                  <div class='usershare' style={{width:'50%',height:'100%',float:'left',}}>123</div>
                  <div class='userlike' style={{width:'50%',height:'100%',float:'left',}}>234</div>
            </div>

         </div>
     </div>
  );
}
}
export default member;
