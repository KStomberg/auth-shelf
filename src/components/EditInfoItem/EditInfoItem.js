import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditInfoItem extends React.Component {

        
  render() {
    return (
      <>
    <form > 
          <input
            placeholder='Item Description'
            type='text'
            value='Test description'
            
            ></input>{'   '}
          <br />
          <input
            placeholder='Image URL'
            type='text'
            value='test img'
           
            ></input>{'   '}
          <br />
          <button>Save Item</button>
        </form>
        </>
      
       
    );
  }
}

export default connect(mapStoreToProps)(EditInfoItem);
