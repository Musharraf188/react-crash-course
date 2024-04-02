import React from 'react';
import main from './main';
import classes from './Post.module.css';
import PostList from './PostList';

const names =['Musharraf', 'Syed'];

let name = 'Hi Janeman';
let Lname = 'What is This';
export default function Post(props) {
  return (
    <li className={classes.post}>
   <p className={classes.author}>{props.author}</p>
   <p className={classes.text}>{props.body}</p>
   </li>
  )
}
