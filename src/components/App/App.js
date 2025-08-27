import React from 'react';
import Counter from 'components/Counter/Counter/Counter';
import Dropdown from 'components/Dropdown/Dropdown';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import { Container } from 'components/App/App.styled';
import colorPickerOptions from 'colorPickerOptions.json';

export default function App() {
  return (
    <Container>
      <Counter />
      <Counter initialValue={10} />

      <Dropdown />

      <ColorPicker options={colorPickerOptions} />
    </Container>
  );
}
