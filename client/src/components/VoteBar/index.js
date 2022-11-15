import React from 'react';
import { ReactDOM } from 'react-dom';
import "../VoteBar/votebar.css"
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons'

class VoteBar extends React.Component {
    state = { vote: 0, score: 0 }

    vote(type) {
        this.setState(state => ({
            vote: state.vote === type ? 0 : type
        }))
    }

    render() {
        const { vote, score } = this.state

        return (
            <div className="voteWrapper">
            
            <button id="btnUp" className={vote === 1 ? 'active' : undefined} onClick={() => this.vote(1)}><ArrowUp/></button>
            <h2>{score + vote}</h2>
            <button id="btnDown" className={vote === -1 ? 'active' : undefined} onClick={() => this.vote(-1)}><ArrowDown/></button>
            </div>
        )
    }
}
  
  export default VoteBar;
