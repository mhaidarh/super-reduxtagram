import React, { Component } from 'react'
import { Link } from 'react-router'

import Photo from './Photo'

class PhotoGrid extends Component {
  render () {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, index) => {
          return (
            <Photo
              {...this.props}
              key={post.id}
              index={index}
              post={post}
            />
          )
        })}
      </div>
    )
  }
}

export default PhotoGrid
