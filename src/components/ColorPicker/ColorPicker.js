import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/ColorPicker/ColorPicker.styled';

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    return (
      <Container>
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClasses = ['ColorPicker__option'];

            if (index === this.state.activeOptionIdx) {
              optionClasses.push('active');
            }

            return (
              <button
                key={label}
                className={optionClasses.join(' ')}
                style={{ backgroundColor: color }}
                // onClick={() => this.setState({ activeOptionIdx: index })}
              ></button>
            );
          })}
        </div>
      </Container>
    );
  }
}
