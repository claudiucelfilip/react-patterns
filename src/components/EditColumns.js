import React, { Component } from 'react';
import { restrictedColumns, columnNameMappings, filterRestrictedColumns, mapColumnName } from '../column-utils';
import CheckboxDropdown from './CheckboxDropdown';

export default class EditColumns extends Component {
    onChange = (event, column) => {
        console.log(column);
        const { columns, table } = this.props;
        table.setColumn(column.label, column.value);
    }
    render () {
        const { columns, table } = this.props;
        const filteredColumns = columns
            .filter(filterRestrictedColumns(restrictedColumns))
            .map(column => {
                return {
                    value: table.columns[column] === false ? false : true,
                    label: column
                }
            })
        return <CheckboxDropdown 
            className={this.props.className}
            items={filteredColumns} 
            change={this.onChange}>
            Edit Columns
        </CheckboxDropdown>
    }
}