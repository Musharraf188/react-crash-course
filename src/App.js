import React from "react";
import PostList from "./components/PostList";
import main from "./components/main";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModel() {
    setModalIsVisible(true);
  }
   function hideModel(){
    setModalIsVisible(false);
  }
  return (
    <>
    
      <MainHeader  ShowOn={showModel}/>
      <main>    
        <PostList onPosting={modalIsVisible}  onStop={hideModel}/>
      </main>
    </>
  );
}
