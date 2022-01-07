import React from 'react';
import PropTypes from 'prop-types';

class RaritySelect extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <div className="inputs">
        Raridade:
        <select
          className="rare-input"
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          required
        >
          <option value="normal"> Normal </option>
          <option value="raro"> Raro </option>
          <option value="muito raro"> Muito raro </option>
        </select>
      </div>
    );
  }
}

export default RaritySelect;

RaritySelect.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
