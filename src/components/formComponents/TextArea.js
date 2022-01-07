import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="description-input">
        Descrição:
        <textarea
          maxLength="200"
          id="description-input"
          data-testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}
export default TextArea;

TextArea.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
