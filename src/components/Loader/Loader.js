import React from 'react';

const Loader = () => {
    return <div style={{ margin: '30px' }}>
        <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}

export default Loader;