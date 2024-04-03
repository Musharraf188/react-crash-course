import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import PostList from "./PostList";

const names = ["Musharraf", "Syed"];

let name = "Hi Janeman";
let Lname = "What is This";
export default function Post({ id, author, body }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        {" "}
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
