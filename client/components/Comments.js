import React from 'react'

class Comments extends React.Component {
  renderComment (comment, index) {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit (e) {
    e.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
  }

  render () {
    const comments = this.props.comments[this.props.params.postId] || []

    return (
      <div className='comments'>

        {comments.map(this.renderComment)}

        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author name' />
          <input type='text' ref='comment' placeholder='comment text' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
