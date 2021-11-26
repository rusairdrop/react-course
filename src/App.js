import React, {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  const [post, setPost] = useState({title: '', body: ''});
  
  const addNewPost = (event) => {
    event.preventDefault();
    
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }
  
  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder='Post title'
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
        />
        <MyInput
          type="text"
          placeholder='Post description'
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
