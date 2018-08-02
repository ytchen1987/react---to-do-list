import React from 'react';
const Input = ({onInputChange, onInputSubmit, newToDo}) => {
  return ( <
    form >
    <
    div className = "form-group" >
    <
    input type = "text"
    className = "form-control"
    id = "listItemInput"
    placeholder = "Add new todo"
    value = {
      newToDo
    }
    onChange = {
      onInputChange
    }
    /> <
    button onClick = {
      onInputSubmit
    }
    className = "btn btn-primary" >
    Add Item <
    /button> <
    /div> <
    /form>
  )
};

export default Input;
