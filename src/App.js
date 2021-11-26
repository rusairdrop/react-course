import React, {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

import './styles/App.css'



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Post title'/>
        <input type="text" placeholder='Post description'/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
