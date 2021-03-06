import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../utils/constants';
import { getCategories } from '../utils/parser';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        payload: { data }
    }
}

export function getDataFailure(error) {
    return {
        type: FETCHING_DATA_FAILURE,
        payload: { error } 
    }
}

export function fetchCategories() {
    return (dispatch) => {
        dispatch(getData());
        getCategories()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((error) => 
                dispatch(getDataFailure(error))
            );
    }
}
