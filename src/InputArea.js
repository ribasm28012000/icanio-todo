import React, { useState } from 'react'

const InputArea = (props) => {
    const [inputText, setInputText] = useState("")
    const handleChange = (event) => {
        setInputText(event.target.value)

    }
  return (
    <div className="appForm">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={()=>{
            props.addItems(inputText)
            setInputText("")
        }}>
            <span>
                Insert
            </span>
        </button>
    </div>
  )
}

export default InputArea;