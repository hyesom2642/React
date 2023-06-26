// import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
// import TOC from './components/TOC';
// import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header title="WEB"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Subject></Subject> */}
//         <Header title="Web" sub="world wide web!"></Header>
//         <Header title="React" sub="For UI"></Header>Header
//         <TOC></TOC>
//         <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
//       </div>
//     )
//   }
// }

export default App;