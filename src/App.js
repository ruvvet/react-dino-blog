import logo from './logo.svg';
import './App.css';
import Post from './Post'

function App(props) {


  return (
    <div className="App">
           <p>Title: {props.post.title}</p>
        <p>Author: {props.post.author}</p>
        <p>Body: {props.post.body.title}</p>
        <p>1st Comment: {props.post.comments[0]}</p>

      {/* <Post post={post} /> ---if i wanted to pass it from another file */}
      {/* imported module name, varName={what's being passed to it} */}


    </div>
  );
}

export default App;
