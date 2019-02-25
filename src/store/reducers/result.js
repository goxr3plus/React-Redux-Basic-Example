import * as actionTypes from "../actions"

const initialState = {
   results: [],
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.STORE_RESULT:
         return {
            ...state,
            results: state.results.concat({ id: Math.random() * Math.random(), value: action.result }),
         }
      case actionTypes.DELETE_RESULT:
         const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
         return {
            ...state,
            results: updatedArray,
         }

      default:
         return state
   }
}

export default reducer
