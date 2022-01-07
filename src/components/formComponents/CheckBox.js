import React from 'react';
import PropTypes from 'prop-types';
import HasTrunfo from './HasTrunfo';

class CheckBox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    if (hasTrunfo) {
      return <HasTrunfo />;
    }

    return (
      <label className="checkbox-inputs" htmlFor="trunfo">
        Super Trybe Trunfo:
        <input
          type="checkbox"
          id="trunfo"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default CheckBox;

CheckBox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
