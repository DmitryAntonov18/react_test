import React, { Component } from "react";
import "./App.css";
import Work_list from "./inc/Work_list.js";
import Bord_list from "./inc/Bord_list.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      window: 0,
      bord_id_active: 0,
      bord: [
        {
          items: [],
          id: 0,
          changed:true,
          title: "title",
          elms: {
            active: 0,
            complete: null
          }
        }
      ]
    };
  }
  remove_el(i) {
    const bord = this.state.bord.slice();
    bord[this.state.bord_id_active].items.splice(i, 1);
    this.setState({ bord: bord });
  }
  add() {
    const bord = this.state.bord.slice();
    const items = bord[this.state.bord_id_active].items.slice();
    var find_ = function(ie) {
      var finded = false;
      if (items.indexOf(ie) > -1) {
        finded = true;
      }
      if (finded) return find_(ie + 1);
      else return ie;
    };
    var index_d = find_(0);
    bord[this.state.bord_id_active].items.forEach(function(item) {
      item.changed = false;
    });
    bord[this.state.bord_id_active].items.push({
      title: "title",
      text: "text",
      id: index_d,
      changed: true
    });
    bord[this.state.bord_id_active].elms.active =
      bord[this.state.bord_id_active].items.length;
    this.setState({ bord: bord });
  }
  add_board() {
    const bord = this.state.bord.slice();
    var find_ = function(ie) {
      var finded = false;
      if (bord.indexOf(ie) > -1) {
        finded = true;
      }
      if (finded) return find_(ie + 1);
      else return ie;
    };
    var index_d = find_(0);
    bord.forEach(function(item) {
      item.changed = false;
    });
    bord.push({
      items: [],
      id: 0,
      changed:true,
      title: "title",
      elms: {
        active: 0,
        complete: null
      }
    });
    this.setState({ bord: bord });
  }
  change_board_begin(i) {
    const bord = this.state.bord.slice();
    bord[i].changed = true;
    this.setState({ bord: bord });
  }
  change_board_end(i) {
    const bord = this.state.bord.slice();
    bord[i].changed = false;
    this.setState({ bord: bord });
  }
  change_board_title(i, event) {
    const bord = this.state.bord.slice();
    bord[i].title = event.target.value;
    this.setState({ bord: bord });
  }

  change_begin(i) {
    const bord = this.state.bord.slice();
    bord[this.state.bord_id_active].items[i].changed = true;
    this.setState({ bord: bord });
  }
  change_end(i) {
    const bord = this.state.bord.slice();
    bord[this.state.bord_id_active].items[i].changed = false;
    this.setState({ bord: bord });
  }
  change_title(i, event) {
    const bord = this.state.bord.slice();
    bord[this.state.bord_id_active].items[i].title = event.target.value;
    this.setState({ bord: bord });
  }
  change_text(i, event) {
    const bord = this.state.bord.slice();
    bord[this.state.bord_id_active].items[i].text = event.target.value;
    this.setState({ bord: bord });
  }
  type_window(type) {
    if (type == 0) {
      return (
        <Bord_list
          value={this.state.bord}
          onClick={(type,id) => {
            if(type=="enter"){
              this.setState({
                window: 1, bord_id_active: id
              })
            }else if(type=="add"){
              this.add_board();
            }
            else if(type=="change_begin"){
              this.change_board_begin(id);
            }
            else if(type=="change_end"){
              this.change_board_end(id);
            }
          }}
          onChange={(type)=>{
            if(type=="title",id,event){
              this.change_board_title(id,event)
            }
          }}
        />
      );
    } else {
      console.log("sss");
      return (
        <Work_list
          value={this.state.bord[this.state.bord_id_active].items}
          onClick={(type, index, type_child) => {
            if (type == "back") {
              this.setState({ window: 0 });
            } else if (type == "items") {
              if (type_child == 1) {
                this.remove_el(index);
              } else if (type_child == 2) {
                this.change_begin(index);
              } else if (type_child == 3) {
                this.change_end(index);
              } else if (type_child == "add") {
                this.add();
              }
            }
          }}
        />
      );
    }
  }
  render() {
    return <div>{this.type_window(this.state.window)}</div>;
  }
}

export default App;
