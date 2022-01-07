import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="section-board">
        <div className="preview-card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <div className="preview-description">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="preview-attr">
            <p data-testid="cardAttr1-card">{ cardAttr1 }</p>
            <p data-testid="cardAttr2-card">{ cardAttr2 }</p>
            <p data-testid="cardAttr3-card">{ cardAttr3 }</p>
          </div>
          <div className="preview-rarity">
            <p data-testid="rare-card">{ cardRare }</p>
          </div>
          {
            cardTrunfo ? <p data-testid="trunfo-card"> Super Trunfo </p>
              : <p />
          }
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
