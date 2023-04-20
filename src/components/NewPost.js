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

    console.log(enteredTitle);
  
  const value = {
    userId: 1,
    id: post.length+1,
    title: enteredTitle,
    body: "hello world"
  }

  console.log(value)
  setWaiting(true)

  fetch("https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",
    headers: {
      "Accept": 'application.json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(value)
  })
  .then(Response=> Response.json())
  .then(
    posts => {setPost([...post,posts])
      console.log("posts")
    setWaiting(false)} 
    
  )
  setEnteredTitle('')
 }
   return (
    <div className="bg">
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button onClick={submitHandler}>Save</button>
    </form>
    </div>
  );
  
  }
export default NewPost;
