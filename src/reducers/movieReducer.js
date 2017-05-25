function movieReducer(state = {}, action) {
  switch (action.type) {
    case 'SHOW_MOVIE':
      return {
        url: action.url,
      }
    default:
      return state
  }
}

export default movieReducer;
