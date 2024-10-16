import { useState } from 'react'

const Anecdote = ({title, text}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
} 

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleSetAnecdote = () => {
    const max = anecdotes.length - 1
    const min = 0
    const anecdoteIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('anecdoteIndex:', anecdoteIndex)
    setSelected(anecdoteIndex)
  }

  const updatePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const indexOfHighestVotedAnecdote = () => {
    return points.reduce((maxIndex, currentValue, currentIndex, arr) => 
      currentValue > arr[maxIndex] ? currentIndex : maxIndex, 0);
  }

  return (
    <div>
      <Anecdote title='Anecdote of the day' text={anecdotes[selected]}/>
      <p>has {points[selected]} votes</p>
      <div>
        <Button onClick={updatePoints} text='vote' />
        <Button onClick={handleSetAnecdote} text='next anecdote' />
      </div>
      <Anecdote title='Anecdote with most votes' text={anecdotes[indexOfHighestVotedAnecdote()]}/>
    </div>
  )
}

export default App