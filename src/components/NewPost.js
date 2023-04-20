import { useState } from "react";
import classes from './NewPost.module.css';


function NewPost({post, setPost, waiting, setWaiting}) {
  const [enteredTitle, setEnteredTitle] = useState('');

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();  
    setWaiting(true);
  
  let value = {
    userId: 1,
    id: post.length,
    title: enteredTitle
  }

  setWaiting(true)

  fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST"
  })
  .then(Response=> Response.json())
  .then(
    posts => {setPost([...post,posts])
    setWaiting(false)} 
    
  )
  setEnteredTitle('')
 }



  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
  
  }
export default NewPost;
