import React, { Component } from 'react';


export default class Toggle extends Component {
    state = {
        checked: true
    }
    shouldComponentUpdate(_, nextState) {
        return nextState.checked !== this.state.checked;
    }
    onClick = (event) => this.setState({
        checked: !this.state.checked
    })
    render () {
        let { checked } = this.state;
        console.log('toggle render');
        return <div onClick={this.onClick}>
            {this.props.children(checked)}
        </div>
    }
}