import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'
import TodoList from './Component/Stato/ToDoList'

function alertClick(){
  alert ("CIAOOO");
}
function handleChange(e){
  console.log(e)
}
function handleSubmit(e){
  e.preventDefault()
  console.log(e)
}


function App() {
  const [count, setCount] = useState(0)
  const cities = [
    {
      id : 0,
      isVisitato : true,
      titolo : "Tokyo",
      descrizione :"Hello there",
      image :"https://images.unsplash.com/photo-1554797589-7241bb691973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D"
    },
    {
      id : 1,
      isVisitato :true,
      titolo : "London",
      descrizione : "Good morning",
      image : "https://images.unsplash.com/photo-1733234976396-87cf34ae6038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" 
    },
    {
      id : 2,
      isVisitato : true,
      titolo : "Calgary",
      descrizione :"hello",
      image : "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0dGF8ZW58MHx8MHx8fDA%3D" 
    },
    {
      id : 3,
      isVisitato : false,
      titolo :"Chicago",
      descrizione : "-------------------------",
      image : "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D"
    }
    ]

    return (
      <>
      <TodoList> </TodoList>
    {/* <Card 
  isVisitato = {true}
  titolo = "Tokyo"
  descrizione = "Hello there"
  image = "https://images.unsplash.com/photo-1732878796195-0479be305faf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D"></Card>
  <Card 
    isVisitato = {true}
    titolo = "London"
    descrizione = "Good morning"
    image = "https://images.unsplash.com/photo-1733234976396-87cf34ae6038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" > 
  </Card>
  <Card 
  isVisitato = {true}
  titolo = "Calgary"
  descrizione ="hello"
  image = "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0dGF8ZW58MHx8MHx8fDA%3D" >
  </Card>
  <Card 
  isVisitato = {false}
  titolo = "Chicago"
  descrizione = "-------------------------"
  image = "https://images.unsplash.com/photo-1733036016861-0541eb76dac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D">
  </Card>
   */}

    {/* {cities.map((city) => (
      <Card key ={city.id}
      titolo = {city.titolo}
      image = {city.image}
      isVisitato = {city.isVisitato}
      descrizione ={city.descrizione}>
      </Card>
     ))} */}
    
    {cities.filter((city) => city.isVisitato).map((city) => (
        <Card key ={city.id}
        titolo = {city.titolo}
        image = {city.image}
        isVisitato = {city.isVisitato}
        descrizione ={city.descrizione}>
        </Card>
    ))}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={(alertClick)}>
          alert 
        </button>
        <input type='text' onChange={handleChange} />
        <form onSubmit = {handleSubmit}>
          <button type='submit'> Clicca qui </button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
