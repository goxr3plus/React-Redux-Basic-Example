import * as actionTypes from "./actionTypes"

export const saveResult = result => {
   return {
      type: actionTypes.STORE_RESULT,
      result: result,
   }
}

export const storeResult = result => {
   return (dispatch, getState) => {
      setTimeout(() => {
         console.log("Old Counter: ", getState().reducer1.counter)
         dispatch(saveResult(result))
      }, 500)
   }
}

export const deleteResult = resultElementId => {
   return {
      type: actionTypes.DELETE_RESULT,
      resultElementId: resultElementId,
   }
}
