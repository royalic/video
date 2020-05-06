import logo from './logo.svg';
import React, { Component } from 'react';
import { Select } from 'antd';
class login extends Component {
    constructor(props){
       super(props);
       this.toggleMovieButton=this.toggleMovieButton.bind(this);
       this.playMovieButton=this.playMovieButton.bind(this);
       this.closePop=this.closePop.bind(this);
       this.state={type:[1],link:[],movietype:['movies-content'],movieplay:['none'],playmovie:['images/1.mp4'],};
    }
  render() {
  return (
<div>
<h1>2142153</h1>
</div>
  );
}
}
export default login;
