import { playersActions } from '../utils/constants';

const initialState = {
  players: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case playersActions.FETCHING:
      return {
        ...state,
        players: [...state.players], // esto tb.. [...state.books]
        isFetching: true
      }
    case playersActions.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        players: [...state.players].concat(action.payload.data) //revisar esto, [...state.books, action.payload.data]
      }
    case playersActions.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default playersReducer;