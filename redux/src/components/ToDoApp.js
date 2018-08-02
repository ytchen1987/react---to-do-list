import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Input from './input';
class ToDoApp extends React.Component {
  render() {
    console.log(this.props)
    const that = this;
    const InputProps = {
      newToDo: that.props.toDoApp.newToDo,
      onInputChange(event) {
        that.props.inputChange(event.target.value)
      },
      onInputSubmit(event) {
        event.preventDefault();
        that.props.inputSubmit();
      }
    };
    const ListProps = {
      listItems: that.props.toDoApp.list,
      onListItemClick(i) {
        that.props.listItemClick(i);
      },
      onRemoveItemClick(i) {
        that.props.removeItemClick(i,'你还要写点啥？');
      }
    }
    return ( <
      div className = "row" >
      <
      div className = "col-md-10 col-md-offset-1" >
      <
      div className = "panel panel-default" >
      <
      div className = "panel-body" >
      <
      h1 > My To Do App < /h1> <
      hr / >
      <
      List { ...ListProps
      }
      /> < /
      div > <
      /div> < /
      div > < Input { ...InputProps
      }
      /> < /
      div > )
  }
}

export default ToDoApp;
