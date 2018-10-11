import React, { Component } from 'react';
import { restrictedColumns, columnNameMappings, filterRestrictedColumns, mapColumnName } from '../column-utils';
import CheckboxDropdown from './CheckboxDropdown';

export default class EditColumns extends Component {
    onChange = (event, column) => {
        const { restrictedColumns } = this.props;
        const checked = event.target.checked;

        if (!checked) {
          restrictedColumns.next([...restrictedColumns.value, column.label]);
        } else {
          restrictedColumns.next(restrictedColumns.value.filter(item => item !== column.label));
        }

    }
    render () {
        const { columns, restrictedColumns } = this.props;
        
        const filteredColumns = columns.value.map((column, index) => ({
            label: column,
            value: restrictedColumns.value.indexOf(column) === -1
        }));
        
        return <CheckboxDropdown 
            className={this.props.className}
            items={filteredColumns} 
            change={this.onChange}>
            Edit Columns
        </CheckboxDropdown>
    }
}