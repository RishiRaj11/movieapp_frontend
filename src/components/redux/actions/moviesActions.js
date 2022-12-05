import {GET_MOVIES_SUCCESS,GET_MOVIES_FAIL} from '../constants/movieConstant';
import axios from 'axios';

const URL = "http://localhost:5000";
export const getMovies = () => async (dispatch) => {
    try {
        //console.log("Before")
        const { data } = await axios.get(`${URL}/movies`);
        // console.log("After")
        dispatch({ type:GET_MOVIES_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type:GET_MOVIES_FAIL, payload: error.response });
    }
};

