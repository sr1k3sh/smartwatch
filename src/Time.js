import React, { Component } from 'react';
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='time-div'>
                <div className="time"><span className="time-counter">10:00</span><span> AM</span></div>
                <div className="date"><span>Mon,Aug 05</span></div>
            </div>
        );
    }
}

export default Time;