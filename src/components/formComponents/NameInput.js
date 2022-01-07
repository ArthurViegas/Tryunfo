import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="name-input">
        Name:
        <input
          type="text"
          id="name-input"
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

export default NameInput;

NameInput.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
