import React from 'react'
import { Grid, PostCard, Title, Date } from './Blog.styles';

const Blog = (props) => (
  <Grid>
    {props.posts.map((post, index) => {
      return (
        <PostCard key={index}>
          <a href={`/blog/${post.path}`}><img src={`${process.env.API_URL}${post.image}`} alt={post.title} /></a>
          <a href={`/blog/${post.path}`}><Title>{post.title}</Title></a>
          <Date>{post.created}</Date>
        </PostCard>
      )
    })}
  </Grid>
)

export default Blog
