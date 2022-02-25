import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Input from "./Input.js"
import List from "./List.js"

function App() {
  const [input,setInput] = useState("")
  const [listItems, setListItems] = useState([])
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setListItems([...listItems, input])
    setInput("")
  }
  const handleItemDelete = (itemToDelete) => {
    setListItems(listItems.filter(item => item !== itemToDelete))
  }

  return (
    <>
    <Input currentValue={input} onInputChange={handleInputChange} onFormSubmit={handleFormSubmit}/>
    <List listItems={listItems} onItemDelete={handleItemDelete}/>
    </>
  );
}

export default App;
