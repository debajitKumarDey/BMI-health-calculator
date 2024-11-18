import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [weight, setWeight]=useState('')
const [height, setHeight]= useState('')
const [error, setError]= useState('')
const [bmi, setBmi]= useState('')
const [result, setResult]=useState('')

const submitHandler=(event)=>{
event.preventDefault()
setError('')
const newHeight = (height/100)
const newBmi = weight/(newHeight*newHeight)
setBmi(newBmi.toFixed(2))
if(newBmi<= 18.5){
  setResult('Under Weight')
}
else if(newBmi>=18.5 && newBmi<=24.9){
  setResult('Normal Weight')
}
else if(newBmi>=25 && newBmi<=29.9){
  setResult('Over Weight')
}
else{
  setResult('Obesed')
}
}
const reload =(event)=>{
event.preventDefault()  
setBmi('')
setHeight('')
setWeight('')
setResult('')
}
  return (
    <div className='main-contain'>
      <div className="container">
        <h2 className='heading'>BMI CALCULATOR</h2>
        <div className="weight">
          <p className='head'>Weight(kg)</p>
          <input type="number" placeholder='Please insert your weight' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div className="height">
          <p className='head'>Height(cm)</p>
          <input type="number" placeholder='Please insert your height'value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        {error&&<p >{error}</p>}
        <div className="btn">
          <button className='submit'onClick={submitHandler}>Submit</button>
          <button className="reload"onClick={reload}>Reload</button>
        </div>
        <p className="output">Your BMI is: {bmi}</p>
        <p className="output">You are: {result}</p>
      </div>
    </div>
  )
}

export default App
