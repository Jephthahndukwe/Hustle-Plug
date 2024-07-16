import * as types from "../types"
import { config } from "../config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../header"

const url = config.liveUrl

// Action Creators
export const user_register = (userData, navigate, setShowModal) => async (dispatch) => {
	try {
	  dispatch({ type: types.USER_REGISTER_REQUEST });
  
	  const config = {
		headers: {
		  'Content-Type': 'application/json'
		}
	  };
  
	  const { data } = await axios.post(`${url}/user/`, userData, config);
		if (data.status === 'ok') {
			dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data });
			toast.success(data.message, {
				position: 'top-right',
			})
			// Set localStorage item to indicate successful registration
			localStorage.setItem('registered', 'true');
			
			// Close the modal
			setShowModal(false);

			// Navigate to a different page if necessary
			navigate('/');
		} else {
				throw new Error(data.message);
		}
	} catch (error) {
	  dispatch({
		type: types.USER_REGISTER_FAIL,
		payload: error.response && error.response.data.message
		  ? error.response.data.message
		  : error.message,
	  });
	}
  };

// export const user_login = (body, navigate) => async (dispatch) => {
// 	try {
// 	  dispatch({ type: types.USER_SIGNIN_REQUEST });
  
// 	  const { data } = await axios.post(`${url}/`, body);
// 	  console.log(data, 'fetched')
// 	  if (data.status === 'Ok') {
// 		dispatch({ type: types.USER_SIGNIN_SUCCESS, payload: data.data });
// 		toast.success(data.message, {
// 		  position: 'top-right',
// 		});
// 		// navigate('/');
// 	  } else {
// 		throw new Error(data.message);
// 	  }
// 	} catch (error) {
// 	  const message = error.response && error.response.data.message
// 		? error.response.data.message
// 		: 'Something went wrong';
  
// 	  toast.error(message, {
// 		position: 'top-right',
// 	  });
  
// 	  dispatch({ type: types.USER_SIGNIN_FAIL, payload: message });
// 	}
//   };