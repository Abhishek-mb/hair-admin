import React from 'react';
import { Triangle } from 'react-loader-spinner'
const Loader = () => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    }}><Triangle
            height="80"
            width="80"
            color="#cf511b"
            ariaLabel="triangle-loading"
            wrapperClassName=""
            wrapperStyle={{background: '#f2f2f2'}}
            visible={true}
        /></div>;
};

export default Loader;