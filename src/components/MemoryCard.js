import React, { Component } from 'react';
import "./MemoryCard.css";
import Logo from '../../src/dg.png';


class MemoryCard extends Component { //Memory card is a component of the react app
    constructor(props) { //save all the previous states of the objects
        super(props);
        this.state = { isFlipped: false }; //this is the default state for isFlipped
    }

    //whenever the user clicks this card, the state of isFlipped twists.
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped 
        })
    };

    //CSS takes care of this part, CSS class name = A, or A+B, 
    // innerClass is the variable to save the CSS class name. 
    render() {
        let innerClass = "MemoryCard_inner";
        if (this.state.isFlipped) {
            innerClass += ' flipped'; //how do we determine flipped? 
            //it's the when the user clicks on the card (the state isflipped becomes true), so inner class = A+B.
        }

        return (
            //when the user clicks a card, it calls the function clickHandler which toggles the state of isFlipped
            <div className="MemoryCard" onClick={ (e) => this.clickHandler(e) }> 
                <div className={innerClass}>
                    <div className="MemoryCard_back"><img src={Logo} className="Logo" alt="bg" /></div>
                    <div className="MemoryCard_front">∆</div>
                </div>
            </div>

        )
    }
}

//this is the syntax .. we have import on the top and export on the bottom.
export default MemoryCard;