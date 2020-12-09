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
      title: props.post.title,
      author: props.post.author,
      body: props.post.body,
      comments: props.post.comments,
      // we created new inputtext key here
    };
  }

  newComment = () => {
    let newArr = [...this.state.comments, this.state.inputText]; // [ [comments], newcomment]

    this.setState({ comments: newArr });
  };

  changeInput = (evt) => {
    this.setState({ inputText: evt.target.value });
  };

  render() {
    return (
      <div>
        <p>Title: {this.state.title}</p>
        <p>Author: {this.state.author}</p>
        <p>Body: {this.state.body}</p>
        <p>Comments: {this.state.comments.join(',')}</p>

        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeInput}
        ></input>
        <button onClick={this.newComment}>Add Comment</button>
      </div>
    );
  }
}

export default App;
