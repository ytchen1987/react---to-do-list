import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp.js';

import { inputChange,inputSubmit,listItemClick,removeItemClick } from '../redux/modules/toDoApp'

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    inputSubmit: (value) => dispatch(inputSubmit(value)),
    listItemClick: (value) => dispatch(listItemClick(value)),
    removeItemClick: (index,value) => dispatch(removeItemClick(index,value))
  }; // here we'll soon be mapping actions to props
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
