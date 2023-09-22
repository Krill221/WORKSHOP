import React, { useEffect, useState } from 'react'
import PostSearch from './PostSearch'
import PostList from './PostList'

function PostContainer() {

  const [posts, setPosts] = useState([])
  const [list, setList] = useState([])

  const onSearch = (text) => {
    if (text.trim().length !== 0) {
      const filtred = posts.filter(item => item.title.includes(text))
      setList(filtred)
    } else {
      setList(posts)
    }
  }

  useEffect(() => {
    async function load() {
      const ans = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
      setPosts(ans)
      setList(ans)
    }
    load()
  }, [])

  return (
    <div className="flex-auto p-4">
      <PostSearch onSearch={onSearch} />
      <PostList posts={list} />
    </div>
  )
}

export default PostContainer