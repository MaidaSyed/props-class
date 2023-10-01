import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOne from './components/card'
import AvatarWithText from './components/avatar'
import ExampleNavbarFour from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExampleNavbarFour />
    <CardOne
    name="Maida Syed"
    description="I want to be fighter pilot it's my aim and one day definately  will achieve it" 
    img="https://www.aljazeera.com/wp-content/uploads/2023/09/AP22055812997954-1695085900.jpg?resize=1200%2C675" />
    <h1 className='m-20 bg-green-300 p-10 text-black'>HELLO</h1>
    <AvatarWithText name="Maida" text="WebDeveloper" />
    </>
  )
}

export default App
