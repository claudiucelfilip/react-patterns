import React, { Component, Fragment } from 'react';
import Store, { addStore, withStore } from './Store';
import Table2, { Thead, Tbody } from './Table2';
import SearchResourceStore from './SearchResourceStore';
import { restrictedColumns, columnNameMappings, filterRestrictedColumns, mapColumnName } from '../column-utils';

class TableResourceStore extends Component {
    render() {
        return <Fragment>
            <h1>TableResourceStore</h1>
            <Store storekey="music-table-1">
                {({tracks, columns, restrictedColumns}) => (<Fragment>
                    <Table2 tracks={tracks} columns={columns} restrictedColumns={restrictedColumns}>
                        <Thead></Thead>
                        <Tbody></Tbody>
                    </Table2>
                    <SearchResourceStore tracks={tracks} columns={columns}></SearchResourceStore>
                </Fragment>)}
            </Store>
            <Store storekey="music-table-2">
                {({tracks, columns, restrictedColumns}) => (<Fragment>
                    <Table2 tracks={tracks} columns={columns} restrictedColumns={restrictedColumns}>
                        <Thead></Thead>
                        <Tbody></Tbody>
                    </Table2>
                    <SearchResourceStore tracks={tracks} columns={columns}></SearchResourceStore>
                </Fragment>)}
            </Store>
        </Fragment>;
    }
}

export default TableResourceStore;
