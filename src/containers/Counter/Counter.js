import React, { Component } from "react"
import { connect } from "react-redux"
import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"
import * as actionTypes from "../../store/actions"

class Counter extends Component {
   render() {
      return (
         <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl label="Subtract 2" clicked={this.props.onSubstractCounter} />
            <hr />
            <button onClick={()=>this.props.storeResult(this.props.ctr)}>Store Result</button>
            <ul>
               {this.props.storedResults.map((result, index) => (
                  <li key={result.id} onClick={() => this.props.deleteResult(result.id)}>
                     {result.value}
                  </li>
               ))}
            </ul>
         </div>
      )
   }
}

/* Maps the state managed by redux to props of this container*/
const mapStateToProps = state => {
   return {
      ctr: state.ctr.counter,
      storedResults: state.res.results,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
      onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
      onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 2 }),
      storeResult: result => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
      deleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
   }
}

/* Connect is a function that returns a function */
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Counter)
