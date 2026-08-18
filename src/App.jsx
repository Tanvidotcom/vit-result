import React from 'react'
import ResultCalculator from './components/ResultCalculator'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>VIT Semester Result Calculator</h1>
        <p>Enter MSE (30%) and ESE (70%) marks for four subjects.</p>
      </header>
      <main>
        <ResultCalculator />
      </main>
         </div>
  )
}
