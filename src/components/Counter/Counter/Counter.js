import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controls } from 'components/Counter/Controls/Controls';
import { Value } from 'components/Counter/Value/Value';
import { CounterContainer } from 'components/Counter/Counter/Counter.styled';

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <CounterContainer>
        <Value value={this.state.value} />

        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </CounterContainer>
    );
  }
}
