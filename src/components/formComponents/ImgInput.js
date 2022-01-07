import React from 'react';
import PropTypes from 'prop-types';

class ImgInput extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="image">
        Imagem:
        <input
          type="text"
          id="image"
          data-testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

export default ImgInput;

ImgInput.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
