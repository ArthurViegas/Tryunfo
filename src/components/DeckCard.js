import React from 'react';
import PropTypes from 'prop-types';

class DeckCard extends React.Component {
  render() {
    const { deckCard, deleteCardByName } = this.props;
    return (
      <div className="card-div">
        <h3>{ deckCard.cardName }</h3>
        <img src={ deckCard.cardImage } alt={ deckCard.cardName } />
        <div className="preview-description">
          <p>{ deckCard.cardDescription }</p>
        </div>
        <div className="preview-attr">
          <p>{ deckCard.cardAttr1 }</p>
          <p>{ deckCard.cardAttr2 }</p>
          <p>{ deckCard.cardAttr3 }</p>
        </div>
        <div className="preview-rarity">
          <p>{ deckCard.cardRare }</p>
        </div>
        { deckCard.cardTrunfo && <p> Super Trunfo </p> }
        <button
          type="button"
          id={ deckCard.cardName }
          data-testid="delete-button"
          onClick={ deleteCardByName }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default DeckCard;

DeckCard.propTypes = {
  deckCard: PropTypes.node.isRequired,
  deleteCardByName: PropTypes.func.isRequired,
};
