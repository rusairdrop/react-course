import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
