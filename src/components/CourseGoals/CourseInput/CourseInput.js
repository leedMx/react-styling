import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
    if (isValid){
      props.onAddGoal(enteredValue);
    }
  };

  const inputStyle = {borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'};

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={inputStyle} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
