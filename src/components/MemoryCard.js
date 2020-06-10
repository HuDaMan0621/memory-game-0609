import React, { Component } from 'react';
import "./MemoryCard.css";
import Logo from '../../src/dg.png';


class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }

    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped 
        })
    };

    render() {
        let innerClass = "MemoryCard_inner";
        if (this.state.isFlipped) {
            innerClass += ' flipped';
        }

        return (
            <div className="MemoryCard" onClick={ (e) => this.clickHandler(e) }>
                <div className={innerClass}>
                    <div className="MemoryCard_back"><img src={Logo} className="Logo" alt="bg" /></div>
                    <div className="MemoryCard_front">∆</div>
                </div>
            </div>

        )
    }
}
export default MemoryCard;