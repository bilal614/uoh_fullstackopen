import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const computeAverage = () => {
    return (good*1 + bad*-1)/total
  }
  const computePositivePercentage = () => {
    return ((good/total) * 100).toFixed(3) + '%'
  }
  if (good === 0 && neutral === 0 && bad === 0){
      return (<div>
        <p>No feedback given</p>
        </div>
      )
  } else {
      return (
        <div>
          <h1>statistics</h1>
          <table>
            <tbody>
              <StatisticLine text="good" value ={good} />
              <StatisticLine text="neutral" value ={neutral} />
              <StatisticLine text="bad" value ={bad} />
              <StatisticLine text="average" value ={computeAverage()} />
              <StatisticLine text="positive" value ={computePositivePercentage()} />
            </tbody>
          </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    const updatedGood = good + 1
    console.log('updatedGood:', updatedGood)
    setGood(updatedGood)
  }
  const handleSetNeutral = () => {
    const updatedNeutral = neutral + 1
    console.log('updatedNeutral:', updatedNeutral)
    setNeutral(updatedNeutral)
  }
  const handleSetBad = () => {
    const updatedBad = bad + 1
    console.log('updatedBad:', updatedBad)
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleSetGood} text='good' />
      <Button onClick={handleSetNeutral} text='neutral' />
      <Button onClick={handleSetBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App