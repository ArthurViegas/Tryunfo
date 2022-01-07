import React from 'react';
import PropTypes from 'prop-types';

class Attr3 extends React.Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="attr3">
        Attr3:
        <input
          type="number"
          id="attr3"
          data-testid="attr3-input"
          name="cardAttr3"
          max="90"
          min="0"
          value={ cardAttr3 }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

export default Attr3;

Attr3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
