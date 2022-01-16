import * as types from "../types";

function authReducer(state = {}, action) {
  switch (action.type) {
    case types.USER_SIGNIN_ATTEMPT: {
      return {
        logging: true,
      };
    }
    case types.SET_TOKEN_USER: {
      const { user, token } = action;
      return {
        ...state,
        user,
        token,
      };
    }
    case types.USER_SIGNIN_SUCCESS: {
      return {
        logging: false,
        loggedin: true,
        user: action.payload,
      };
    }
    case types.USER_SIGNIN_FAILED: {
      return {
        logging: false,
        loggedin: false,
        error: action.payload,
      };
    }
    case types.USER_SIGNUP_ATTEMPT: {
      return {
        registering: true,
      };
    }
    case types.USER_SIGNUP_SUCCESS: {
      return {
        registering: false,
        loggedin: true,
        user: action.payload,
      };
    }
    case types.USER_SIGNUP_FAILED: {
      return {
        registering: false,
        loggedin: false,
        error: action.payload,
      };
    }
    case types.USER_SIGNOUT_SUCCESS: {
      return {
        loggedin: false,
        user: null,
        error: null,
      };
    }
    default:
      return state;
  }
}
export { authReducer };
