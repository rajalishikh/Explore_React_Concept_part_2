 
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'


function App() {
  function handleClick1(){
    alert("First button clicked")
  }
  function add(num){
    alert(num+5)
  }
  

  return (
    
    <>
     <Counter></Counter>
     <Team></Team>
     <User></User>
     
      <h1>Vite + React</h1>
      <button onClick={handleClick1}>First_Button</button>
      <button onClick={()=>alert('My name is React')}>First_Button_React</button>
      <button onClick={()=>add(5)}>First_Button_Add</button>

      
    </>
  )
}

export default App
