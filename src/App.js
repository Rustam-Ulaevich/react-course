import React, {useState} from "react";
import {Counter} from "./components/Counter";
import {ClassCounter} from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import PostItem from "./components/PostItem";

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript2', body: 'Description'},
    {id: 3, title: 'JavaScript3', body: 'Description'},
    ]

  )

  return (
    <div className="App">
      <form>
        <input type="text" placeholder='title of post'/>
        <input type="text" placeholder='Description'/>
        <button>Create post</button>
      </form>
      <PostList posts={posts} title='List of posts 1'/>
    </div>
  );
}

export default App;
