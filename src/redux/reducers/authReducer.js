import * as types from "../types"

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
	  case types.USER_REGISTER_REQUEST:
		return { loading: true };
	  case types.USER_REGISTER_SUCCESS:
		return { loading: false, userInfo: action.payload };
	  case types.USER_REGISTER_FAIL:
		return { loading: false, error: action.payload };
	  default:
		return state;
	}
  };

// export const SigninReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case types.USER_SIGNIN_REQUEST:
// 			return { loading: true };
// 		case types.USER_SIGNIN_SUCCESS:
// 			return { loading: false, user: action.payload, message: action.message };
// 		case types.USER_SIGNIN_FAIL:
// 			return { loading: false, error: action.payload, message: action.message };
// 		case types.USER_SIGNIN_LOGOUT:
// 			return {};
// 		default:
// 			return state;
// 	}
// };