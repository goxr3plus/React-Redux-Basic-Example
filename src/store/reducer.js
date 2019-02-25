const initialState = {
   counter: 0,
   results: [],
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "INCREMENT":
         return {
            ...state,
            counter: state.counter + 1,
         }
      case "DECREMENT":
         return {
            ...state,
            counter: state.counter - 1,
         }
      case "ADD":
         return {
            ...state,
            counter: state.counter + action.value,
         }
      case "SUBSTRACT":
         return {
            ...state,
            counter: state.counter / action.value,
         }
      case "STORE_RESULT":
         return {
            ...state,
            results: state.results.concat({ id: Math.random() * Math.random(), value: state.counter }),
         }
      case "DELETE_RESULT":
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
