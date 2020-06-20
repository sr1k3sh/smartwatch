import React, { Component } from 'react';
class WatchHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class='holder' id={this.props.id}></div>
        );
    }
}

export default WatchHolder;