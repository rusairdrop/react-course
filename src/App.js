import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  
  const [selectedSort, SetSelectedSort] = useState('')
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const sortPosts = (sort) => {
    SetSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title={'Список постов'}/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены
        </h1>
      }
    </div>
  );
}

export default App;
