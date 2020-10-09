import React from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoItem from '../InfoItem/InfoItem';



class InfoPage extends React.Component {

  state = {
      description: '',
      image: '',
      user_id: this.props.store.user.id
  };
  onChangeHandler = ( event, propertyName) => {
    console.log('we are changing', propertyName);
    this.setState({
     
      ...this.state,
      [propertyName]: event.target.value
      
    })
    
  }
  addItem = (event) => {
    event.preventDefault();
    console.log('Current State:', this.state);
    this.props.dispatch({
      type: 'ADD_SHELF_ITEM',
      payload: this.state
    })
    this.getShelf();
  }

  getShelf = () => {
    this.props.dispatch({
      type: 'FETCH_SHELF_ITEM'
    })
  }

  componentDidMount() {
  this.getShelf()
}

  render() {

    console.log('Updated state:', this.state);
    return (

      <div>
        <p>Info Page</p>
        
         <form onSubmit={this.addItem}> 
          <input
            placeholder='Item Description'
            type='text'
            value={this.state.description}
            onChange={(event) => this.onChangeHandler(event, 'description')}
            ></input>{'   '}
          <br />
          <input
            placeholder='Image URL'
            type='text'
            value={this.state.image}
            onChange={(event) => this.onChangeHandler(event, 'image')}
            ></input>{'   '}
          <br />
          <button>Save Item</button>
        </form>
        
          {this.props.store.shelf.setShelfItem.map((item) => (
            <InfoItem key={item.id} item={item} getShelf={this.getShelf}/>
          ))}
        

      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
