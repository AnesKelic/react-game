import React from "react";

function Square(props) {
    return (
        <button className={`${props.winnerClass} square`} onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}

export default Square;