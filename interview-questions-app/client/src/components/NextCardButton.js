import React, { Component } from 'react';
import './NextCardButton.css';

export default class NextCardButton extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }

  render(props) {
    return (
      <div className='button-container'>
        <button className='button' onClick={this.drawCard}>Draw card</button>
      </div>
    );
  }
}