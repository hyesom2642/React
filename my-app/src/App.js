import React, { Component } from 'react';
import './App.css';

import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Subject></Subject> */}
        <Subject title="Web" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;