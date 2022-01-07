import React from 'react';
import PropTypes from 'prop-types';
import DeckCard from './DeckCard';

class Deck extends React.Component {
  render() {
    const { deck, deleteCardByName, hasFilter, filteredDeck } = this.props;

    const myMap = (chosenDeck) => (
      chosenDeck.map((deckCard) => (
        <DeckCard
          key={ deckCard.cardName }
          deckCard={ deckCard }
          deleteCardByName={ deleteCardByName }
        />))
    );

    if (hasFilter) {
      return (
        <section className="deck-section">
          {
            myMap(filteredDeck)
          }
        </section>

      );
    }
    return (
      <section className="deck-section">
        {
          myMap(deck)
        }
      </section>
    );
  }
}

export default Deck;

Deck.propTypes = {
  deck: PropTypes.node.isRequired,
  hasFilter: PropTypes.bool.isRequired,
  filteredDeck: PropTypes.node.isRequired,
  deleteCardByName: PropTypes.func.isRequired,
};
