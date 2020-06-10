import React, { Component } from 'react';
import "./MemoryCard.css";
import Logo from '../../src/dg.png';


class MemoryCard extends Component {

    render() {
        return (
            <div className="MemoryCard">
                <div className="MemoryCard_inner">
                    <div className="MemoryCard_back"><img src={Logo} className="Logo" alt="bg" /></div>
                    <div className="MemoryCard_front">∆</div>
                </div>
            </div>

        )
    }
}
export default MemoryCard;