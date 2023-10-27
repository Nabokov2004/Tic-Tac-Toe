import React from 'react';
import { useState } from 'react';
import Table from './Table';




 function Game(){
    const [history,setHistory] = useState([Array(9).fill("")]);
    const [currentMove,setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares:string[] = history[currentMove]
    

    function handlePlay(nextSquares:string[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
       
      
    }
    function jumpTo(nextMove:number){
        setCurrentMove(nextMove)
        
    }

    const moves = history.map((squares:number[], move:number) =>{
        let descriotion:string;
        if (move > 0){
            descriotion = `Go to move #${move}`;
        }
        else{
            descriotion = 'Go to game start';
        }
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>
                    {descriotion}
                </button>
            </li>
        )
    })

    return(
    <>  
    <div>
        <Table xIsNext ={xIsNext} currentMove={currentMove} squares = {currentSquares} onPlay={handlePlay}/>
    </div>
    <div className='game-info'>
        <ol>
           {moves}
        </ol>
    </div>
    </>
    )
}

export default Game;