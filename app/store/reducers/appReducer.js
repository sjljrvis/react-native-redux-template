
const initialState = {
  userInfo: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_INFO":
      state.userInfo = action.userInfo;
      return state;
    default:
      return state;
  }
};

export default appReducer;
