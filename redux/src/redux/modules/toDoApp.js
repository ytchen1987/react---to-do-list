const INPUT_CHANGED = 'ToDoApp/INPUT_CHANGED';
const INPUT_SUBMIT = 'ToDoApp/INPUT_SUBMIT';
const ITEM_LI_CLICK = 'ToDoApp/ITEM_LI_CLICK';
const REMOVE_LI_ITEM = 'ToDoApp/REMOVE_LI_ITEM';
const initialState = {
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
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)
export function inputChange(newToDo) {
  return {
    type: INPUT_CHANGED,
    newToDo
  }
}
export function listItemClick(index) {
  return {
    type: ITEM_LI_CLICK,
    index
  }
}
export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  }
}
export function removeItemClick(index,value) {
  return {
    type: REMOVE_LI_ITEM,
    index,value
  }
}
export default function reducer(state = initialState, action) { // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type) {
    case INPUT_CHANGED:
      return Object.assign({},
        state, {
          newToDo: action.newToDo
        }
      );
    case ITEM_LI_CLICK:
      return Object.assign({},
        state, {
          list: [...state.list.slice(0, action.index), Object.assign({}, state.list[action.index], {
            done: !state.list[action.index].done
          }), ...state.list.slice(action.index + 1)]
        }
      );
    case REMOVE_LI_ITEM:
      return Object.assign({},
        state, {
          list: [...state.list.slice(0, action.index), ...state.list.slice(action.index + 1)],
          newToDo:action.value
        }
      );
    case INPUT_SUBMIT:
      return Object.assign({},
        state, {
          list: [...state.list, {
            val: state.newToDo,
            done: false
          }],
          newToDo: ''
        }
      );
    default:
      return state;
  }
}
