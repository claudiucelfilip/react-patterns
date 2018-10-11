import React, { Component, Fragment } from 'react';
import EditColumns from './EditColumns';
import TableStore from '../TableStore';
import { observer } from 'mobx-react';
import { filterRestrictedColumns } from '../column-utils';
import './Table.css';

@observer
export default class Table extends Component {
    componentWillMount () {
        this.store = new TableStore(this.props.tableKey);
    }
    render () {
        const { tracks, tbody, thead } = this.props;
        const columns = Object.keys(tracks[0] || {});
        const filteredColumns = columns.filter(filterRestrictedColumns(this.store.restrictedColumns));

        return <Fragment>
            <EditColumns className="float-right" table={this.store} columns={columns}></EditColumns>
            <div className="table-overflow">
                <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr>
                            {thead(filteredColumns)}
                        </tr>
                    </thead>
                    <tbody>
                        {tbody(tracks, filteredColumns)}
                    </tbody>
                </table>
            </div>
        </Fragment>;
    }
}
