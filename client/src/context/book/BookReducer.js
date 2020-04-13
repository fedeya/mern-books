import { GET_BOOKS, DELETE_BOOK, ADD_BOOK, ACTIVE_BOOK, UPDATE_BOOK } from '../../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_BOOK:
    case DELETE_BOOK:
      return {
        ...state,
        loading: true
      }
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    case ACTIVE_BOOK:
      return {
        ...state,
        book: action.payload
      }
    case UPDATE_BOOK:
      return {
        ...state,
        book: false,
        loading: true
      }
    default:
      return state;
  }
}