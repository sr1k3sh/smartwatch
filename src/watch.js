import React, { Component } from 'react'
import WatchHolder from './WatchHolder';
import Flower from './Flower';
import Time from './Time';

export default class Watch extends Component {
    render() {
        return (
            <div class="watch-container">
                <WatchHolder id="left-holder"></WatchHolder>
                <WatchHolder id="right-holder"></WatchHolder>
                <div class="holder-inside"></div>
                <div class="inner-circle">
                    <Flower></Flower>
                    <Time></Time>
                    {/* <div class='inner-shadow-circle'></div> */}
                </div>
            </div>
        )
    }
}