import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckboxDropdown extends Component {
    onChange = (e, item) => {
        item.value = e.target.checked;
        this.props.change && this.props.change(e, item);
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    doNothing = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render () {
        return <div className={'btn-group ' + this.props.className}>
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.props.children}
            </button>
            <div className="dropdown-menu" onClick={this.doNothing}>
                {this.props.items
                    .map((item, index) => {
                        const id = 'check' + Math.floor(Math.random() * 1000);
                        return <div className="dropdown-item" key={index}>
                            <div className="form-check">

                                <input type="checkbox"
                                    className="form-check-input"
                                    id={id}
                                    onChange={event => this.onChange(event, item)}
                                    defaultChecked={item.value}
                                />
                                <label className="form-check-label" htmlFor={id}>
                                    {item.label}
                                </label>
                            </div>
                        </div>
                    })}
            </div>
        </div>
    }
}

CheckboxDropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        default: PropTypes.bool
    })).isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};