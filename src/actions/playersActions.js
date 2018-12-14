import { playersActions } from '../utils/constants';
import { getPlayers } from '../utils/parser';

export function getData() {
    return {
        type: playersActions.FETCHING
    }
}

export function getDataSuccess(data) {
    return {
        type: playersActions.FETCH_SUCCESS,
        payload: { data }
    }
}

export function getDataFailure(error) {
    return {
        type: playersActions.FETCH_FAILURE,
        payload: { error } 
    }
}

export function fetchPlayers() {
    return (dispatch) => {
        dispatch(getData());
        getPlayers()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((error) => 
                dispatch(getDataFailure(error))
            );
    }
}
