import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-bottom: 50px;
  padding: 15px;

  border: 1px solid black;

  .ColorPicker__title {
    margin-top: 0;
    color: black;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  .ColorPicker__option {
    width: 50px;
    height: 50px;
    margin-right: 12px;

    border: none;
    outline: none;
    cursor: pointer;

    transition: transform 250ms linear;

    :last-of-type {
      margin-right: 0;
    }

    &.active {
      transform: scale(1.2);
    }
  }
`;
