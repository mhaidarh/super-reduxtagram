const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT': {
      return state
      break
    }
    case 'REMOVE_COMMENT': {
      return state
      break
    }
  }
  return state
}

export default posts
