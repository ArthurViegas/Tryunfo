import React from 'react';
import PropTypes from 'prop-types';
import NameInput from './formComponents/NameInput';
import TextArea from './formComponents/TextArea';
import Attr1 from './formComponents/Attr1';
import Attr2 from './formComponents/Attr2';
import Attr3 from './formComponents/Attr3';
import ImgInput from './formComponents/ImgInput';
import RaritySelect from './formComponents/RaritySelect';
import SaveButton from './formComponents/SaveButton';
import CheckBox from './formComponents/CheckBox';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section className="section-board">
        <NameInput cardName={ cardName } onInputChange={ onInputChange } />
        <TextArea cardDescription={ cardDescription } onInputChange={ onInputChange } />
        <Attr1 cardAttr1={ cardAttr1 } onInputChange={ onInputChange } />
        <Attr2 cardAttr2={ cardAttr2 } onInputChange={ onInputChange } />
        <Attr3 cardAttr3={ cardAttr3 } onInputChange={ onInputChange } />
        <ImgInput cardImage={ cardImage } onInputChange={ onInputChange } />
        <RaritySelect cardRare={ cardRare } onInputChange={ onInputChange } />
        <CheckBox
          hasTrunfo={ hasTrunfo }
          onInputChange={ onInputChange }
          cardTrunfo={ cardTrunfo }
        />
        <SaveButton
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
      </section>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
