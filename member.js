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
            <div class='personinfo'>
            <div class="user-center">
                <span class="title">会员中心</span>
                <div class="user-center-content">
                    <form action="/userinfo" method="post">
                        <label for="username">昵称</label>
                        <input type="text" placeholder="昵称" name="username" id="username" autofocus/><br/>
                        <label for="email">邮箱</label>
                        <input type="text" placeholder="邮箱" name="email" id="email"/><br/>
                        <label for="tel">手机</label>
                        <input type="text" placeholder="手机" name="email" id="tel"/><br/>
                        <label for="desc">简介</label><br/>
                        <textarea name="" id="desc" cols="30" rows="10">十年窗下无人问，一举成名天下知</textarea><br/>
                        <button type="submit">保存修改</button>
                    </form>
                </div>
            </div>
            </div>
            <div class='changeinfo'>
                   <div class="moviecol-con-l"></div>
                    <div class="moviecol-con-r">
                        <div class="moviecol-con-title">
                            <span class="movie-title">
                                环太平洋
                            </span>
                            <a class="movie-play" href="play.html">
                                ▶播放影片
                            </a>
                        </div>
                        <span class="moviecol-con-desc">
                                该片主要讲述了人类为了抵抗怪兽的进攻，研制出了高大的机器战士与来犯怪兽进行对抗的故事。
                                该片主要讲述了人类为了抵抗怪兽的进攻，研制出了高大的机器战士与来犯怪兽进行对抗的故事。
                        </span>
                    </div>
            </div>
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
