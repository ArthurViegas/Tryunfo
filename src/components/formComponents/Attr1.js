import React from 'react';
import PropTypes from 'prop-types';

class Attr1 extends React.Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    return (
      <label className="inputs" htmlFor="attr1">
        Attr1:
        <input
          type="number"
          id="attr1"
          data-testid="attr1-input"
          name="cardAttr1"
          max="90"
          min="0"
          value={ cardAttr1 }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

export default Attr1;

Attr1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
