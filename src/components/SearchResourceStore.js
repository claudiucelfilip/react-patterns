import React, { Component, Fragment } from 'react';

class SearchResourceStore extends Component {
    componentWillMount() {
        fetch('http://hidden-haze-247.getsandbox.com/songs')
            .then(res => res.json())
            .then(res => {
                const tracks = res.Tracks;
                const columns = Object.keys(tracks[0]);
                this.props.tracks.next(tracks);
                this.props.columns.next(columns);
            });
    }
    render() {
        return <Fragment></Fragment>;
    }
}

export default SearchResourceStore;
