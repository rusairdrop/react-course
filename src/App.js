import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const
    sortedPosts = useMemo(() => {
      if (filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
    }, [filter.sort, posts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])
  
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
    </div>
  );
}

export default App;
