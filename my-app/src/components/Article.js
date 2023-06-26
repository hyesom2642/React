function Article(props) {
  return (
    <article>
      <h2>{ props.title }</h2>
      { props.body }
    </article>
  )
}

export default Article;

// import React, { Component } from 'react';

// class Content extends Component {
//   render() {
//     return (
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     )
//   }
// }

// export default Content;