import React, { Component } from 'react';
import { Container } from 'components/Dropdown/Dropdown.styled';

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <Container>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </Container>
    );
  }
}
