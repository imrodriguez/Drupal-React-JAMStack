import React from 'react'
import drupalField from '../../helpers/drupalField'
import { PostCard } from './Blog.styles';

const Blog = (props) => (
  <div className="BlogWrapper">
    {props.posts.map((post, index) => {
      return (
        <PostCard>
          <p key={index}>{drupalField(post.created)}</p>
          <p key={index}>{drupalField(post.title)}</p>
          <img src={drupalField(post.field_image)} />
        </PostCard>
      )
    })}
  </div>
)

export default Blog
