function Dino(props) {
    console.log(props)
    return (

        // how to loop through this?
      <div>
        <p>Title2: {props.dino.title}</p>
        <p>Author2: {props.dino.author}</p>
        <p>Body2: {props.dino.body.title}</p>
        <p>1st Comment2: {props.dino.comments[0]}</p>


      </div>
    );
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