import React from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InfoItem from '../InfoItem/InfoItem';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
  
//   <div>
//     <p>
//       Shelf Page
//     </p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {
  
  getShelf = () => {
    this.props.dispatch({
      type: 'FETCH_SHELF_ITEM'
    })
  }

  componentDidMount() {
  this.getShelf()
}

  render() {
    return (
      <div>
        <p>Info Page</p>
        
          {this.props.store.shelf.setShelf.map((item) => (
            <InfoItem key={item.id} item={item} />
          ))}
        

      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
