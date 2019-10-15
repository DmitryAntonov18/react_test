import React, { Component } from "react";
import "./App.css";

const ITEMS = [
  { title: "title", text: "text", id:0 },
  { title: "title2", text: "text2", id:1 },
  { title: "title3", text: "text3", id:2 },
]
class Item extends Component{
  constructor(){
    super();
    this.state={
      id: 0,
    }
  }
  render(){
    return(
      <div className="item">
        <div className="title">{this.props.title}</div>
        <input className="text" type="text" value={this.props.text}/>
        <div className="row">
          <div className="add"
            onClick={() => {
              //this.add();
            }}
          ></div>
          <div className="close"
            onClick={() => {
              //this.remove();
            }}
          ></div>
        </div>
      </div>
    )
  }
}
class Work_list extends Component{
  render(){
    return(
      <div className="list">
        {ITEMS.map((item,index)=>(
          <Item
            id={index}
           title={item.title}
           text={item.text}
           /> 
      ))}
      </div>
    )
  }
} 
class App extends Component {
  render() {
    return (
      <Work_list/>
    );
  }
}

export default App;
