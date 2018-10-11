import React, { Component, Fragment } from 'react';
import './App.css';
import Toggle from './components/Toggle';
import Switch from './components/Switch';
import Table from './components/Table';
import { observer } from 'mobx-react';
import SongsStore from './SongsStore';
import MusicControls from './components/MusicControls';
import { restrictedColumns, columnNameMappings, filterRestrictedColumns, mapColumnName } from './column-utils';
import AdvancedSearch from './components/AdvanedSearch';

@observer
class App extends Component {
    store = new SongsStore();
    columnNameMappings = Object.assign({}, columnNameMappings, {
        MusicControls: <MusicControls type="thead"></MusicControls>
    });
    restrictedColumns = restrictedColumns;
    onToggle = (checked) => {
        console.log('Toggle is', checked);
    }
    mapTrackValue (track, column) {
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

    render () {
        return (
            <div className="App">
                <main className="container">
                    <AdvancedSearch></AdvancedSearch>
                    <Toggle>
                        {(checked) => <Fragment>
                            {checked && <p>Toggle on</p>}
                            <Switch checked={checked}></Switch>
                            {!checked && <p>Toggle off</p>}
                        </Fragment>}
                    </Toggle>
                    <br />
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
                </main>
            </div>
        );
    }
}

export default App;
