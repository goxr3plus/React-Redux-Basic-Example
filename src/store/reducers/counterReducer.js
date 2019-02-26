import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../utility"

const initialState = {
   counter: 0,
}

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.INCREMENT:
         return updateObject(state, { counter: state.counter + 1 })
      case actionTypes.DECREMENT:
         return updateObject(state, { counter: state.counter - 1 })
      case actionTypes.ADD:
         return updateObject(state, { counter: state.counter + action.value })
      case actionTypes.SUBSTRACT:
         return updateObject(state, { counter: state.counter / action.value })
      default:
         return state
   }
}

export default counterReducer
