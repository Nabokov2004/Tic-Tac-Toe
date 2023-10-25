import React from "react";
import './App.css';

interface Square{
    value?:string;
    onSquareClick?:()=> void;
    }

// interface SquareProps {
//         value: string;
//         onSquareClick: () => void;
//     }
    
    function Square({value, onSquareClick}:Square){
    
    return(
    <button  className='Square' onClick={onSquareClick}>
      {value}
    </button>
    )
    }
    
export default Square;
    