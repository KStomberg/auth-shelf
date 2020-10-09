import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class InfoItem extends React.Component {

    getShelf = () => {
        this.props.dispatch({
          type: 'FETCH_SHELF_ITEM'
        })
      }

    deleteItem = () => {
        console.log('Clicked delete button', this.props.item.id);
        this.props.dispatch({
            type: 'DELETE_SHELF_ITEM',
            payload: this.props.item.id
        })
        this.getShelf();
}
        
  render() {
    return (
      <>
        <h4>{this.props.item.description}</h4>
        <img
          height="200px"
          width="200px"
          key={this.props.item.id}
          alt={this.props.item.description}
          src={this.props.item.image_url}
        ></img>
            {this.props.store.user.id === this.props.item.user_id && <button onClick={this.deleteItem}>Delete</button>}
            <button>EDIT</button>
        </>
      
       
    );
  }
}

export default connect(mapStoreToProps)(InfoItem);


