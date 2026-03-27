import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriespromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())
.then()
function App() {

  return (
    <>
    <Suspense fallback={<p>Waiting for message...</p>}>
      <Countries countriespromise={countriespromise}>
        
      </Countries>
    </Suspense>
    <h1>mahmud</h1>
    </>
  )
}

export default App
