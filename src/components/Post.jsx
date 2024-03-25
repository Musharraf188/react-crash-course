import React from 'react';
import main from './main';
import classes from './Post.module.css';
import PostList from './PostList';

const names =['Musharraf', 'Syed'];
const chosenName = Math.random() > 0.5 ? names[0] : names[1];
let name = 'Hi Janeman';
Lname = 'What is This';
export default function Post() {
  return (
    <main className={classes.post}>
   <PostList author={name} overView={Lname}/>
   </main>
  )
}
