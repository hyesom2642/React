function Nav(props) {
  const lis = [];
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={ t.id }>
        <a href={'/read/' + t.id} id={ t.id } onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(e.target.id);
        }}>
          { t.title }
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>
        { lis }
        {/* <li>
          <a href="/read/1">HTML</a>
        </li>
        <li>
          <a href="/read/2">CSS</a>
        </li>
        <li>
          <a href="/read/3">JavaScript</a>
        </li>
        <li>
          <a href="/read/4">React</a>
        </li> */}
      </ol>
    </nav>
  )
}

export default Nav;

// import React, { Component } from 'react';

// class TOC extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JavaScript</a></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default TOC;