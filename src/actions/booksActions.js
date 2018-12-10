import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_FAILURE } from '../utils/constants';
import { getBooksByCategory } from '../utils/parser';

export function getData() {
    return {
        type: FETCHING_BOOKS
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_BOOKS_SUCCESS,
        payload: { data }
    }
}

export function getDataFailure(error) {
    return {
        type: FETCHING_BOOKS_FAILURE,
        payload: { error } 
    }
}

export function fetchBooksByCategory(id, page, limit) {
    return (dispatch) => {
        dispatch(getData());
        getBooksByCategory(id, page, limit)
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((error) => 
                dispatch(getDataFailure(error))
            );
    }
}
