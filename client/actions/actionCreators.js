// INCREMENT LIKE

export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// ADD COMMENT

export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// REMOVE COMMENT

export const removeComment = (postId, index) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
