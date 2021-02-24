import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://sun9-40.userapi.com/axvAEVRAAX3HFpfjziZyrN-tYMr9VGQDLfLJbA/KgZ-2P6ZbBc.jpg' />
          {props.message}
          <div>
            <span>like</span> {props.likesCount}
          </div>
    </div>
  )
}

export default Post;