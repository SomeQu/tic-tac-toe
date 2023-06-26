import React, { useState } from 'react';

import './App.css';
import Square from './Square';

function App() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [isX, setX] = useState<boolean>(true);
  const [status, setStatus] =useState<string>('Click on square to start');
  const markTheBlock = (i:number) =>{
    if(calculateWinner(mark) || mark[i]){
      return
    }
    mark[i]= isX ? 'X' : 'O';
    setMark(mark)
    setX(!isX)
    const current:string = calculateWinner(mark);
    if (current) {
      setStatus(`Winner: Player ${current}`)
    } else {
      setStatus('Player ' + (isX ? 'X' : 'O'));
    }
  }
  
  const calculateWinner= (squares:any)=>{
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const restartTheGame =():any =>{
    setX(true)
    setMark(Array(9).fill(null))
    setStatus('Game is restarted! Click on square to start')
  }
  return (
    <div className="App">
      <div className="blocks">
    <button disabled={false} className="block" onClick={()=>markTheBlock(0)}>{mark[0]}</button>
    <button className="block" onClick={()=>markTheBlock(1)}>{mark[1]}</button>
    <button className="block" onClick={()=>markTheBlock(2)}>{mark[2]}</button>
    <button className="block" onClick={()=>markTheBlock(3)}>{mark[3]}</button>
    <button className="block" onClick={()=>markTheBlock(4)}>{mark[4]}</button>
    <button className="block" onClick={()=>markTheBlock(5)}>{mark[5]}</button>
    <button className="block" onClick={()=>markTheBlock(6)}>{mark[6]}</button>
    <button className="block" onClick={()=>markTheBlock(7)}>{mark[7]}</button>
    <button className="block" onClick={()=>markTheBlock(8)}>{mark[8]}</button>
      </div>
      <h1>{status}</h1>
      <button onClick={restartTheGame}>Restart</button>
    </div>
  );
}

export default App;
