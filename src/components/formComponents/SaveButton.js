import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <div className="inputs">
        <button
          id="save-button"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default SaveButton;

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
