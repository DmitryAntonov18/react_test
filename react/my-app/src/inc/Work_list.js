import React, { Component } from "react";

class Work_item extends Component {
  content() {
    if (this.props.value.changed) {
      return (
        <div className="content">
          <input
            className="title"
            type="text"
            defaultValue={this.props.value.title}
            onChange={e => this.props.onChange(0, e)}
          />
          <input
            className="text"
            type="text"
            defaultValue={this.props.value.text}
            onChange={e => this.props.onChange(1, e)}
          />
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="title">{this.props.value.title}</div>
          <div className="text">{this.props.value.text}</div>
        </div>
      );
    }
  }
  button() {
    if (this.props.value.changed) {
      return (
        <div className="save" onClick={() => this.props.onClick(3)}>
          Save
        </div>
      );
    } else {
      return (
        <div className="change" onClick={() => this.props.onClick(2)}>
          Change
        </div>
      );
    }
  }
  render() {
    return (
      <div className="item" id={this.props.value.id}>
        {this.content()}
        <div className="row">
          <div className="close" onClick={() => this.props.onClick(1)}>
            Delete
          </div>
          {this.button()}
        </div>
      </div>
    );
  }
}
class Work_list extends Component {
  render() {
    return (
      <div className="list">
        <div className="back" onClick={() => this.props.onClick('back')}>
          back
        </div>
        {this.props.value.map((item, index) => (
          <Work_item
            value={item}
            key ={index}
            onClick={(type_child) => this.props.onClick('items',index,type_child)}
            onChange={(i, e) => {
              if (i == 0) {
                this.change_title(index, e);
              } else if (i == 1) {
                this.change_text(index, e);
              }
            }}
          />
        ))}
        <div className="add" onClick={() => this.props.onClick('items',0,'add')}>
          add
        </div>
      </div>
    );
  }
}

export default Work_list;