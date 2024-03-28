import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAthor, setEnteredAthor] = useState("");
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAthor(event.target.value);
  }
  function handleModel() {
    setModalIsVisible(false);
  }
  let modalContent;
  if(modalIsVisible){
    modalContent =   <Modal onClose={handleModel}>
    <NewPost
      onBodyChange={changeBodyHandler}
      onAuthorChange={changeAuthorHandler}
    />
    </Modal>
  }
  return (
    <>
    {modalContent}
  
      <ul className={classes.posts}>
        <Post author={enteredAthor} body={enteredBody} />
        <Post author='Musharraf' body='React js is Awesome!' />
      </ul>
    </>
  );
  }
