import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../utility"

const initialState = {
   results: [],
}

const resultReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.STORE_RESULT:
         return updateObject(state, {
            results: state.results.concat({ id: Math.random() * Math.random(), value: action.result }),
         })
      case actionTypes.DELETE_RESULT:
         return updateObject(state, { results: state.results.filter(result => result.id !== action.resultElementId) })
      default:
         return state
   }
}

export default resultReducer
