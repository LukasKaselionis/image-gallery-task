import React from 'react';

const Error = (props) => {
    return <div>
        <p className="mb-0">Try to later</p>
        <span>Error: {props.message}</span>
    </div>
}

export default Error;