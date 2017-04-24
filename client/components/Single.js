import React, { Component } from 'react'
import { Link } from 'react-router'

import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
  render () {
    const { postId } = this.props.params
    const index = this.props.posts.findIndex((post) => post.code === postId)
    const post = this.props.posts[index]
    const postComments = this.props.comments[postId] || []

    // console.log(postId, index, post, postComments)

    return (
      <div className='single-photo'>
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} postId={postId} {...this.props} />
      </div>
    )
  }
}

export default Single
