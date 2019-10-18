import React, { Component } from "react";

class Bord_item extends Component {
  button() {
    if(this.props.changed){
      return(
        <div className="save">Save</div>
      )
    }else{
      return(
        <div className="change">Change</div>
      )
    }
  }
  render() {
    return (
      <div className="item "
        
      >
        <div className="title" id={this.props.value.id} >{this.props.value.title}</div>
        <div className="row">
          <div className="active"><span>Active:</span>{+this.props.value.elms.active}</div>
          <div className="enter"
          onClick={() => {
            this.props.onClick("enter",this.props.value.id)
          }}
          >Enter</div>
          {button()}
          <div className="close">Remove</div>
        </div>
        
      </div>
    );
  }
}
class Bord_list extends Component {
  render() {
    return (
      <div className="list bords">
        {this.props.value.map((item, i) =>  (
          <Bord_item value={item} key ={i}
            onClick={() => {

              this.props.onClick(i)
            }} />
        ))}
        <div className="add">Add</div>
      </div>
    );
  }
}

export default Bord_list;