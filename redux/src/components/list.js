import React from 'react';
const List = (props) => {
  console.log(props)
  const list = props.listItems.map((el, i) => ( <
    li name = {
      i
    } > < h2 onClick = {
      () => props.onListItemClick(i)
    }
    style = {
      el.done ? {
        textDecoration: 'line-through',
        fontSize: '20px'
      } : {
        textDecoration: 'none',
        fontSize: '20px'
      }
    } > {
      el.val
    } < /h2><button className="btn btn-danger pull-right" onClick={() => props.onRemoveItemClick(i)}>x</button > < /li>
  ));
  return ( <
    div >
    <
    ul > {
      list
    } <
    /ul> <
    /div>
  )
};

export default List;
