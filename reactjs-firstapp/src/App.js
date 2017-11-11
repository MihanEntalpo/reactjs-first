import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TestData, InfoNode, InfoNodesList} from './components/InfoNode.js';

var testdata = JSON.parse(require("./testdata.yml"));
console.log(testdata);

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: Box.count || 0
        };
        Box.count = (Box.count || 0) + 1;
    }

    onClick() {
        alert("I was clicked! My index is:" + this.state.index);
    }

    render() {
        return (
            <div className="box" onClick={() => this.onClick()}>
                {this.props.content} (#{this.state.index})
            </div>
        );
    }
};


class App extends Component {
    render() {

    var nodes = TestData.nodes;
    var nodes_order = TestData.nodes_order;

    let ordered_nodes = [];

    for (let i in nodes_order)
    {
        ordered_nodes.push(nodes[nodes_order[i]]);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <InfoNodesList nodes={ordered_nodes} />
        </div>
      </div>
    );
  }
};

export default App;
