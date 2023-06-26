function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{ props.title }</a>
      </h1>
    </header>
  )
}

export default Header;

// import React, { Component } from 'react';

// class Subject extends Component {
//   render() {
//     return (
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     )
//   }  
// }

// export default Subject;