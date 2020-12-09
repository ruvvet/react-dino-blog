import React, { Component } from 'react';


// function Dino(props) {
  //   console.log(props)
  //   return (

  //       // how to loop through this?
  //     <div>
  //       <p>Title2: {props.dino.title}</p>
  //       <p>Author2: {props.dino.author}</p>
  //       <p>Body2: {props.dino.body.title}</p>
  //       <p>1st Comment2: {props.dino.comments[0]}</p>


  //     </div>
  //   );
  // }
//}
  class Dino extends Component {

    constructor(props) {
      super();
      this.state = {
        title: props.dinopost.title,
        author: props.dinopost.author,
        body: props.dinopost.body.title,
        comments: props.dinopost.comments,
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






  export default Dino;



  // CLASS
//   import { render } from '@testing-library/react';
//   import React, { Component } from 'react'
//   class Dino Extends Component{

//     render(){
// <div>
//         <p>Title: {props.post.title}</p>
//         <p>Author: {props.post.author}</p>
//         <p>Body: {props.post.body.title}</p>
//         <p>1st Comment: {props.post.comments[0]}</p>


//       </div>
//     }
//   }

//   export default Dino