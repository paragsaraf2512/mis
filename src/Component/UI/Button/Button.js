import React from 'react';

const button = (props) => {
    return (
        <button className={props.className} onClick={props.click}>
            {props.children}
        </button>
    );
}

export default button;