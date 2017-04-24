const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES': {
      const index = action.index
      return [
        ...state.slice(0, index), // before updating
        {
          ...state[index],
          likes: state[index].likes + 1
        },
        ...state.slice(index + 1) // after updating
      ]
      break
    }
    default: return state
  }
}

export default posts
