import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_FAILURE } from '../utils/constants';

const initialState = {
  books: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS:
      return {
        ...state,
        books: [...state.books], // esto tb.. [...state.books]
        isFetching: true
      }
    case FETCHING_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: [...state.books].concat(action.payload.data) //revisar esto, [...state.books, action.payload.data]
      }
    case FETCHING_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default booksReducer;