import React, { Component } from 'react';
import CheckboxDropdown from './CheckboxDropdown';

const items = [{
    value: true,
    label: 'Test 1'
}, {
    value: false,
    label: 'Test 2'
}, {
    value: true,
    label: 'Test 3'
}];

const label = 'Test Dropdown';
const onChange = (...args) => console.log(args);

export default class AdvancedSearch extends Component {
    render () {
        return <div className="advanced-search grid">
            <div className="row">

                <div className="col">
                    <CheckboxDropdown items={items}>
                        Dropdown 1
                </CheckboxDropdown>
                </div>
                <div className="col">
                    <CheckboxDropdown items={items}>
                        Dropdown 2
                </CheckboxDropdown>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CheckboxDropdown items={items}>
                        Dropdown 3
                </CheckboxDropdown>
                </div>
                <div className="col">
                    <CheckboxDropdown items={items}>
                        Dropdown 4
                </CheckboxDropdown>
                </div>
            </div>
        </div>
    }
}