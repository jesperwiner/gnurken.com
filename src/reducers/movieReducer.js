const DEFAULT_STATE = {
  url: 'http://www.gnurken.com/movies/wow-movies/other/11_Years_of_WoW_Raiding.mp4',
};

function movieReducer(state = DEFAULT_STATE, action) {
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
