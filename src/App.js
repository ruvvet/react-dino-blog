import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Dino from './Dino';
import React, { Component } from 'react';

// function App(props) {

//   return (
//     <div className="App">
//            <p>Title: {props.post.title}</p>
//         <p>Author: {props.post.author}</p>
//         <p>Body: {props.post.body.title}</p>
//         <p>1st Comment: {props.post.comments[0]}</p>

// <Dino dino={props.post} />

//       {/* <Post post={post} /> ---if i wanted to pass it from another file */}
//       {/* imported module name, varName={what's being passed to it} */}

//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      props,
    };
  }

  render() {
    console.log('hello', this.state.props.post);

    return (
      <div>
        <Dino dinopost={this.state.props.post} />
      </div>
    );
  }
}

export default App;
