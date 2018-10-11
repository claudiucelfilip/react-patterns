import React, { Component, Fragment } from 'react';
import EditColumns from './EditColumns2';
import MusicControls from './MusicControls';
import { filterRestrictedColumns } from '../column-utils';

export default class Table2 extends Component {
    mapTrackValue(track, column) {
        const output = track[column];
        switch (column) {
            case 'Artist':
                return output.name;
            case 'MusicControls':
                return <MusicControls type="tbody"></MusicControls>;
            case 'Album':
                return output && output.Title;
            default:
                return output;
        }
    }

    tr = (track, index) => {
        return <tr key={index}>{this.filteredColumns.map(this.td.bind(this, track))}</tr>;
    }
    td = (track, column, index) => {
        return <td key={index}>{this.mapTrackValue(track, column)}</td>;
    }
    th = (column, index) => {
        return <th key={index}>{column}</th>;
    }
    render() {
        const { tbody, thead, restrictedColumns } = this.props;
        
        this.filteredColumns = this.props.columns.value.filter(filterRestrictedColumns(restrictedColumns.value));
        
        this.tracks = this.props.tracks.value.slice(0, 3);

        return <Fragment>
            <EditColumns className="pull-right" columns={this.props.columns} restrictedColumns={this.props.restrictedColumns}></EditColumns>
            <div className="table-overflow">
                <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr>
                            {this.filteredColumns.map(this.th)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.tracks.map(this.tr)}
                    </tbody>
                </table>
            </div>
        </Fragment>;
    }
}

export const Thead = (props) => {

}
export const Tbody = (props) => {

}