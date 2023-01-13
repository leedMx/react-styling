import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const StyledInputField = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.isValid ? 'black' : 'red'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.isValid ? '#ccc' : 'red'};
  background: ${props => props.isValid ? 'transparent' : '#ffd7d7'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true)

  const goalInputChangeHandler = event => {
    const value = event.target.value;
    setValid(value.trim().length > 0);
    setEnteredValue(value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (isValid) {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <StyledInputField isValid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </StyledInputField>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
