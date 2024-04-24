import React, { Component } from 'react';

class Square extends React.Component {
    render (props) {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
export default Square;