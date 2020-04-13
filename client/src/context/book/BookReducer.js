import { GET_BOOKS, DELETE_BOOK, ADD_BOOK } from '../../types';

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
    default:
      return state;
  }
}