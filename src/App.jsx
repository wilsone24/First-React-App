import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Component = ({ name }) => {
  return <h1>Hi {name}</h1>
}

const Formapp = ({ onSubmit }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(name)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <Component name={name} />
      <Formapp onSubmit={setName} />
    </div>
  )
}

export default App
