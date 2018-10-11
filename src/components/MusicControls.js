import React, { Component } from 'react';

export default class MusicControls extends Component {
    render () {
        const {type} = this.props;
        return type === 'thead' ?  'flags-head': 'flags-body';
    }
}