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
    id: 12,
    title: "name",
    body: "okay"
  }

  console.log(value)
  setWaiting(true)

  fetch("https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",
    Headers: {
      "Accept": 'application.json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(value)
  })
  .then(Response=> Response.json())
  .then(
    posts => {setPost([...post,posts])
      console.log("dfddf")
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
      <button onClick={submitHandler}>Save</button>
    </form>
  );
  
  }
export default NewPost;
