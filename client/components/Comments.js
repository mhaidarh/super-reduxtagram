import React from 'react'

const Comments = React.createClass({
  renderComment (comment, index) {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>&times;</button>
        </p>
      </div>
    )
  },

  handleSubmit (e) {
    e.preventDefault()
    this.props.addComment(
      this.props.params.postId,
      this.refs.author.value,
      this.refs.comment.value)
    this.refs.commentForm.reset()
  },

  render () {
    const comments = this.props.comments[this.props.params.postId] || []
    return (
      <div className='comments'>

        {comments.map(this.renderComment)}

        <form onSubmit={this.handleSubmit} ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }

})

export default Comments
