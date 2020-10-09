import React from 'react';
import {connect} from 'react-redux';

class InfoItem extends React.Component{

    render() {
        return(
            <>
            <h4>{this.props.item.description}</h4>
            <img height='200px' width='200px' key={this.props.item.id} alt={this.props.item.description} src={this.props.item.image_url}></img>
            </>
        )
    }
}


export default connect()(InfoItem);