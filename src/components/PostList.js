import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no post yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
