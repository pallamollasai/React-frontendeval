const initialState = {
  count: 0,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.value
      };
    default:
      return state;
  }
};
export default reducer;
