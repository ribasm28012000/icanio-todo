import React from 'react'

const Display = (props) => {
  return (
    <div onClick={()=>props.deleteItem(props.id)}>
        <li>
            {props.text}
        </li>
    </div>
  )
}

export default Display