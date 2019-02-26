import React, { Component } from "react"
import { connect } from "react-redux"
import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"
import * as actionCreators from "../../store/actions/index"

class Counter extends Component {
   render() {
      return (
         <div>
            <CounterOutput value={this.props.counter} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl label="Subtract 2" clicked={this.props.onSubstractCounter} />
            <hr />
            <button onClick={() => this.props.storeResult(this.props.counter)}>Store Result</button>
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
      counter: state.reducer1.counter,
      storedResults: state.reducer2.results,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onIncrementCounter: () => dispatch(actionCreators.increment()),
      onDecrementCounter: () => dispatch(actionCreators.decrement()),
      onAddCounter: () => dispatch(actionCreators.add(5)),
      onSubstractCounter: () => dispatch(actionCreators.substract(2)),
      storeResult: result => dispatch(actionCreators.storeResult(result)),
      deleteResult: id => dispatch(actionCreators.deleteResult(id)),
   }
}

/* Connect is a function that returns a function */
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Counter)
