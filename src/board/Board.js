import React from "react";
import Node from "../Node/Node.js";
import "./Board.css";
import getAnimations from "../Algoritm.js";
const boardSize = 8;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }
  componentDidMount() {
    const board = this.getInitialBoard();
    this.setState({ board });
  }
  getInitialBoard() {
    let board = [];
    let prev = "black";
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.createNode(i, j, prev));
        if (prev === "black") prev = "white";
        else prev = "black";
      }
      if (boardSize % 2 === 0) {
        if (prev === "black") prev = "white";
        else prev = "black";
      }
      board.push(row);
    }
    return board;
  }
  createNode(row, col, color) {
    return {
      row,
      col,
      color,
      isQueen: false,
    };
  }
  visualizeNQueens() {
    const animations = getAnimations(this.state.board);
    for (let i = 0; i < animations.length; i++) {
      const { row, col, pos } = animations[i];
      if (pos) {
        setTimeout(() => {
          document.getElementById(`node-${row}-${col}`).className =
            "node node-success";
        }, i * 1000);
      } else {
        setTimeout(() => {
          document.getElementById(
            `node-${row}-${col}`
          ).className = `node node-${this.state.board[row][col].color}`;
        }, i * 1000);
      }
    }
  }
  render() {
    const board = this.state.board;
    return (
      <>
        <button
          className="visualize-button"
          onClick={() => this.visualizeNQueens()}
        >
          Visualize N-Queens
        </button>
        <div className="board">
          {board.map((row, rowidx) => {
            return (
              <div key={rowidx}>
                {row.map((node, nodeidx) => {
                  const { row, col, color, isQueen } = node;
                  return (
                    <Node
                      key={nodeidx}
                      row={row}
                      col={col}
                      color={color}
                      isQueen={isQueen}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Board;
