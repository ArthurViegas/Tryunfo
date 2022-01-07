import React from 'react';
import PropTypes from 'prop-types';

class Attr2 extends React.Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="attr2">
        Attr2:
        <input
          type="number"
          id="attr2"
          data-testid="attr2-input"
          name="cardAttr2"
          max="90"
          min="0"
          value={ cardAttr2 }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

export default Attr2;

Attr2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
