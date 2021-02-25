const initState = {
  game: {},
  screen: {},
  isLoading: true,
};

function detailReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
}

export default detailReducer;
