import React from "react";
import Square from "./Square";

class Board extends React.Component {

    createBoard(row, col) {

        const board = []
        let cellCounter = 0;


        for (let i = 0; i < row; i++) {

            const columns = []

            for (let j = 0; j < col; j++) {

                columns.push(this.renderSquare(cellCounter++))
            }
            board.push(<div key={i} className="board-row">{columns}</div>)

        }

        return board;
    }


    renderSquare(i) {

        const winnerClass =
            this.props.winnerSquares &&
                (
                    this.props.winnerSquares[0] === i ||
                    this.props.winnerSquares[1] === i ||
                    this.props.winnerSquares[2] === i
                ) ? 'square--green' : '';


        return <Square
            key={i}
            value={this.props.squares[i]}
            winnerClass={winnerClass}
            onSquareClick={() => this.props.onSquareClick(i)}
        />;
    }

    render() {

        return (
            <div>
                {this.createBoard(3, 3)}
            </div>
        );
    }
}

export default Board;