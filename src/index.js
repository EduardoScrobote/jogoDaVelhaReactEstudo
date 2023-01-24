import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

//! COMPONENTE 1
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {  //**Aqui eu criei a função render dentro docomponente Square, e agora se você clicar em qualquer quadrado dentro do jogo da velha, seu estado null se tornara X
        return (  
            <button className="square"
            onClick={() => this.setState({value: "alterei" })} //** aqui está a função que transforma null em X, na linha 9 a função this.state={ value: null,} ela determina o state       
            >; //** Como nulo ou sejá os quadrados ficaram vazios enquanto o setState muda para X
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    //! COMPONENTE 1

    //! COMPONENTE 2
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
} // ! COMPONENTE 2

//! COMPONENTE 3
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
//! COMPONENTE 3
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
