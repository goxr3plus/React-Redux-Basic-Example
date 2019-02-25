import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 2"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={this.props.storeResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map((result,index) => (
            <li key={result.id} onClick={() => this.props.deleteResult(result.id)}> {result.value} </li>
          ))}
        </ul>
      </div>
    );
  }
}

/* Maps the state managed by redux to props of this container*/
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubstractCounter: () => dispatch({ type: "SUBSTRACT", value: 2 }),
    storeResult: () => dispatch({ type: "STORE_RESULT" }),
    deleteResult: (id) => dispatch({ type: "DELETE_RESULT" ,resultElementId:id})
  };
};

/* Connect is a function that returns a function */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
