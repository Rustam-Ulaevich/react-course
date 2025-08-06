import React, {useState} from "react";
import {Counter} from "./components/Counter";
import {ClassCounter} from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
// import PostItem from "./components/PostItem";

function App() {

  const [posts, setPosts] = useState( [
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript2', body: 'Description'},
    {id: 3, title: 'JavaScript3', body: 'Description'},
    ]

  )

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {id: Date.now(), title: title, body: desc}
    setPosts([...posts, newPost])
    setTitle('')
    setDesc('')
  };

  function deletePost(value) {
    setPosts(posts.filter( p => p.id !== value))
  }
  return (
    <div className="App">
      <form>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='title of post'/>
        <Input
          type="text"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder='Description'/>
        <Button onClick={addNewPost}>Create post</Button>
      </form>
      <PostList posts={posts} title='List of posts 1' deletePost={deletePost}/>
    </div>
  );
}

export default App;
