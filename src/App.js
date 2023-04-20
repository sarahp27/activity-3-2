import { useEffect, useState } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  const [post, setPost] = useState([]);
  const [waiting, setWaiting ] = useState(false);

  useEffect(()=> {
    setWaiting(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respond) =>{
      return respond.json();
    })
    .then(post =>{
      setPost(post.slice(0,3))
      setWaiting(false)
      console.log({app:post.slice(0,3)})
    })
  },[])
  
  return (
    <>
      <NewPost setPost={setPost} post={post} waiting={waiting} setWaiting={setWaiting}/>
      {
      post.map((p) => <BlogPosts p={p}/>)
      }
    </>
  );
}

export default App;
