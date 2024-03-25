import React from 'react'
import classes from './Post.module.css';

export default function PostList({author, overView}) {
  return (
   <li className={classes.post}>
<p className={classes.author}>{author}</p>
   <p className={classes.text }> {overView} </p>
   </li>
  )
}
