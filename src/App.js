import logo from './logo.svg';
import React, { Component } from 'react';
import { Select } from 'antd';
class App extends Component {
    constructor(props){
       super(props);
       this.toggleMovieButton=this.toggleMovieButton.bind(this);
       this.state={type:[1],link:[],movietype:['movies-content']};
    }
 toggleMovieButton(e){
   console.log(e.target.attributes.name);
   this.setState({type:e.target.value,movietype:e.target.attributes.name.value})
    }
 toggleMovieButton(e){
   console.log(e.target.attributes.name);
   this.setState({type:e.target.value,movietype:e.target.attributes.name.value})
    }
  getData(){
fetch(`http://127.0.0.1:8081/movieinfo`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({link:data});
console.log(this.state.link);
}
)
} 
testone(){
    const elements=[];
    this.state.link.forEach((item,index)=>{
      if(item.type==this.state.type){//eslint-disable-line
 //     console.log(item.type,'item.type',this.state.type,item.name,this.state.movietype);
      var backlink='./'+item.pic;
      console.log(backlink,'backlink');
      var background={
    display: 'block',
    font: "200 18px/40px 'Microsoft YaHei'",
    height: '200px',
    width: '100%',
    float: 'left',
    color: '#fff',
    cursor: 'pointer',
    border: '1px solid #2fa4e7',
    background: "url(" + require('./'+item.pic) + ") center center / cover no-repeat",
};
//let screenWidth = Dimensions.get('window').width;
      elements.push(
                 <li>
                    <div>
                    <button class="video_iframe" style={background}> ▶&nbsp;播放</button>     
                    </div>
                    <div class="movies-info">
                        <span class="movie-name">视频类{item.name}</span>
                    </div>
                </li>
      )}
    });
    console.log(this.state.movietype);
    return(
      <div class={this.state.movietype} style={{display: 'block',}}>
        <br />
        <br />
            <ul>
        {elements}
            </ul>

      </div>
    )
}
componentWillMount(){
this.getData();
this.testone();
}
  render() {
  return (
<div>
<div class="site-nav clearfix">
    <div class="w">
        <div class="site-nav-logo">
            <a href="#" class="logo"><img src={require("./images/logo.jpg")} alt=""/>Video</a>
        </div>
<div class="site-nav-search">
            <form action="" method="get">
                <input type="text" placeholder="请输入电影名称"/>
                <button type="submit">搜索</button>
            </form>
        </div>
        <div class="site-nav-r">
            <ul>
                <li><a href="index.html">电影</a></li>
                <li><a href="login.html">登录</a></li>
                <li><a href="register.html">注册</a></li>
                <li><a href="index.html">退出</a></li>
                <li><a href="user.html">会员</a></li>
            </ul>
        </div>
    </div>
</div>
            <br />
            <br />
            <br />
            <br />
<div class="main" >
    <div class="w">
        <div class="main-slider">
            <ul>
                <li class="first"></li>
                <li><a href="play.html?id=1"><span>视频1</span><span>简介1</span></a></li>
                <li><a href="play.html?id=2"><span>视频2</span><span>简介2</span></a></li>
                <li><a href="play.html?id=3"><span>视频3</span><span>简介3</span></a></li>
                <li><a href="play.html?id=4"><span>视频4</span><span>简介4</span></a></li>
                <li><a href="play.html?id=5"><span>视频5</span><span>简介5</span></a></li>
                <li><a href="play.html?id=6"><span>视频6</span><span>简介6</span></a></li>
                <li><a href="play.html?id=7"><span>视频7</span><span>简介7</span></a></li>
                <li class="last"></li>
            </ul>
            <a href="javascript:void(0);" class="arrow-l"> ◀</a>
            <a href="javascript:void(0);" class="arrow-r"> ▶ </a>
        </div>
    </div>
</div>
 <div class="movies clearfix" >
    <div class="w">
        <div class="movies-type">
           <br />
           <br />
            <ul>
                <li id="movie" value='1' name='movies-content'  onClick={this.toggleMovieButton}>类型1</li>
                <li id="tv" value='2' name='tvs-content' onClick={this.toggleMovieButton}>类型2</li>
                <li id="tvshow" value='3' name='tvshows-content' onClick={this.toggleMovieButton}>类型3</li>
                <li id="anime" value='4' name='animes-content' onClick={this.toggleMovieButton}>类型4</li>
            </ul>
        </div>
        {this.testone()}
<div class="site-nav2" >
        <div style={{height:'200px'}}>
            <iframe  src="images/1.mp4" style={{width:'100%',marginleft: '50%',background:'#fff',}}></iframe>
        </div>
</div>
    </div>
</div>
</div>
  );
}
}
export default App;
