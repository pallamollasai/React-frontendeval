const initialState = {
  noOfMobiles: 10,
  users: [],
  singleUser: {}
};

export const userMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_MOBILE_SUCCESS":
      return {
        ...state,
        noOfMobiles: state.noOfMobiles - 1
      };
    case "SELL_MOBILE_SUCCESS":
      return {
        ...state,
        noOfMobiles: state.noOfMobiles + 1
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: action.data
      };
    case "GET_SINGLE_USER_SUCCESS":
      return {
        ...state,
        singleUser: action.data
      };

    default:
      return state;
  }
};

/// for removkng specific item
// let findIndex = users.findIndex(user=> user.id == id)
// users.splice(findIndex, 1)

// for editing specific item
// let findIndex = users.findIndex(user => user.id == id);
// users[findindex].user.name = sai
