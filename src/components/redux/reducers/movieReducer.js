import {GET_MOVIES_SUCCESS,GET_MOVIES_FAIL} from '../constants/movieConstant';


export const getAllMovieReducer = (state = { movies:[] }, action) => {
    switch (action.type) {
        case GET_MOVIES_SUCCESS:
            return { movies: action.payload }
        case GET_MOVIES_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
};

