import React from 'react'
function List(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image}/>
      <h4>{props.type}</h4>
  </div>
  )
}
export default List;