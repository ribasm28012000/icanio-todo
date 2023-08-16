
import { useState } from 'react';
import './App.css';
import InputArea  from './InputArea';
import Display from './Display';

function App() {
  const [items, setItems] = useState([])

  const addItems=(inputText)=>{
    setItems((beforeItems)=>{
      return [...beforeItems,inputText]
    })
  }

  const deleteItem=(id)=>{
    setItems((beforeItems)=>{
      return beforeItems.filter((item,index)=>{
        return index!=id
      })
    })
  }

  return (
    <div className="container">
      <div className="topic">
        <h1>TO-DO APP </h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          {
            items.map((items,index)=>{
              return(
                <Display key={index} text={items} deleteItem={deleteItem} id={index}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
