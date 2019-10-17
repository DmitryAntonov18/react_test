import React, { Component } from "react";
import "./App.css";

var ITEMS = [
  { title: "title", text: "text", id:0 },
  { title: "title2", text: "text2", id:1 },
  { title: "title3", text: "text3", id:2 },
]
class Item extends Component{
  constructor(props){
    super(props);
    this.state={
      id: props.id,
      title: props.title,
      text: props.text,
    }
  }
  
  render(){
    return(
      <div className="item" id={this.state.id}> 
        <div className="title">{this.state.title}</div>
        <input className="text" type="text" value={this.state.text}/>
        <div className="row">
          <div className="add"
            onClick={() => {
                this.setState({text: 'Y'})
            }}
          ></div>
          <div className="close"
            onClick={() => {
              this.setState({id: 'X'})
              this.setState({text: 'X'})
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
