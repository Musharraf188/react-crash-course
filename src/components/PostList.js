import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAthor, setEnteredAthor] = useState("");
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAthor(event.target.value);
  }
  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAthor} body={enteredBody} />
        <Post author='Musharraf' body='React js is Awesome!' />
      </ul>
    </>
  );
}
