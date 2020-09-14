import React from 'react';

const Loader = () => {
    return <div className="spinner-border d-none" style={{width: '5rem', height: '5rem'}} role="status">
        <span className="sr-only">Loading...</span>
    </div>
}

export default Loader;