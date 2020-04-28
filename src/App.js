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
      console.log(item.type,'item.type',this.state.type,item.name,this.state.movietype);
      elements.push(
                 <li>
                    <iframe id="video_iframe" src={item.link}></iframe>
                    <div class="movies-info">
                        <span class="movie-name">视频类{item.name}</span>
                    </div>
                </li>
      )}
    });
    console.log(this.state.movietype);
    return(
      <div class={this.state.movietype}>
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
    </div>
</div>
</div>
  );
}
}
export default App;
