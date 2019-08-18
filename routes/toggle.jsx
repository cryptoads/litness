import React, { Component } from 'react';


class Toggle extends class Component{
constructor(props){
  super();
  this.state = {view: false}
}


seeNew(){
  this.setState(state => ({veiw: !state.view}))
}
}