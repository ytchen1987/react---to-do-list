import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Input from './input';
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        val: '上班',
        done: false
      }, {
        val: '吃饭',
        done: false
      }, {
        val: '下班',
        done: false
      }],
      newToDo: 'hello'
    }
  }
  inputSubmit() {
    this.setState((previousState) => ({
      list: [...previousState.list, {
        val: previousState.newToDo,
        done: false
      }],
      newToDo: ''
    }))
  }
  render() {
    const that = this;
    const InputProps = {
      newToDo: that.state.newToDo,
      onInputChange(event) {
        that.setState({
          newToDo: event.target.value
        })
      },
      onInputSubmit(event) {
        event.preventDefault();
        that.inputSubmit();
      }
    };
    const ListProps = {
      listItems: that.state.list,
      onListItemClick(i) {
        console.log(i);
        that.setState((previousState) => ({
          list: [...previousState.list.slice(0, i), Object.assign({}, previousState.list[i], {
            done: !previousState.list[i].done
          }), ...previousState.list.slice(i + 1)]
        }))
      },
      onRemoveItemClick(i) {
        console.log(i);
        that.setState((previousState) => ({
          list: [...previousState.list.slice(0, i), ...previousState.list.slice(i + 1)]
        }))
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
