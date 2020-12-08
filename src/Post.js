function Post(props) {
    return (

        // how to loop through this?
      <div>
        <p>Title: {props.post.title}</p>
        <p>Author: {props.post.author}</p>
        <p>Body: {props.post.body.title}</p>
        <p>1st Comment: {props.post.comments[0]}</p>


      </div>
    );
  }

  export default Post;


