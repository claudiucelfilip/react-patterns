import React from 'react';
import './switch.css';

export default (props) => {
    var switchClass = 'switch';
    console.log(props.checked);
    switchClass += props.checked === true ? ' switch--on' : '';

    return <div className={switchClass}>
        <input type="checkbox" ref={ref => this.input = ref} defaultChecked={props.checked} />
        <span className="switch__text">{props.children}</span>
    </div>

}