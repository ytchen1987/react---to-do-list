import React from 'react';
const Input = (props) => {
  console.log(props)
  return (
    <form>
      <div
        className="form-group">
        <label
          htmlFor="listInput">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="listItemInput"
          placeholder="Add new todo"
          value = {props.newToDo}
          onChange = {props.onInputChange}
        />
        <button onClick={props.onInputSubmit} className="btn btn-primary">
          Add Item
        </button>
      </div>
    </form>
  )
};

export default Input;
