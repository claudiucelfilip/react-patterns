import React, { Component, Fragment } from 'react';
import Toggle from './Toggle';
import Switch from './Switch';
import Table from './Table';
import { observer } from 'mobx-react';
import SongsStore from '../SongsStore';
import MusicControls from './MusicControls';
import { restrictedColumns, columnNameMappings, filterRestrictedColumns, mapColumnName } from '../column-utils';
import AdvancedSearch from './AdvanedSearch';

@observer
class TableMobX extends Component {
    store = new SongsStore();
    columnNameMappings = Object.assign({}, columnNameMappings, {
        MusicControls: <MusicControls type="thead"></MusicControls>
    });
    restrictedColumns = restrictedColumns;
    onToggle = (checked) => {
        console.log('Toggle is', checked);
    }
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

    render() {
        return (<Fragment>
            <h1>TableMobX</h1>
            <Table
                tableKey="first-table"
                tracks={this.store.tracks}
                thead={columns => columns
                    .filter(filterRestrictedColumns(this.restrictedColumns))
                    .map((column, index) => <th key={index}>{mapColumnName(this.columnNameMappings)(column)}</th>)}
                tbody={(tracks, columns) => tracks
                    .slice(0, 3)
                    .map((track) =>
                        <tr key={track.Id}>
                            {columns
                                .filter(filterRestrictedColumns(this.restrictedColumns))
                                .map((column, index) => <td key={track.Id + column}>{this.mapTrackValue(track, column)}</td>)}
                        </tr>
                    )}
            >
            </Table>
            <Table
                tableKey="second-table"
                tracks={this.store.tracks}
                thead={columns => columns
                    .filter(filterRestrictedColumns(this.restrictedColumns))
                    .map((column, index) => <th key={index}>{mapColumnName(this.columnNameMappings)(column)}</th>)}
                tbody={(tracks, columns) => tracks
                    .slice(0, 3)
                    .map((track) =>
                        <tr key={track.Id}>
                            {columns
                                .filter(filterRestrictedColumns(this.restrictedColumns))
                                .map((column, index) => <td key={track.Id + column}>{this.mapTrackValue(track, column)}</td>)}
                        </tr>
                    )}
            >
            </Table>
        </Fragment>
        );
    }
}

export default TableMobX;
