import React from 'react'

function PostList({posts}) {
  return (
    <div className="font-medium">
      {
        posts?.map( post => <div key={post.id}  >{post.title}</div>)
      }
    </div>
  )
}

export default PostList