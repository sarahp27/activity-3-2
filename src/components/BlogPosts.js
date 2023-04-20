import classes from './BlogPosts.module.css';

function BlogPosts(prop) {
  console.log(prop.p)

  return (
    <ul className={classes.posts}>
            <li>
        {prop.p.id} {prop.p.title}
      </li>

    </ul>);

}

export default BlogPosts;
