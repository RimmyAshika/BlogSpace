/* eslint-disable react/prop-types */
import React from 'react';

function Logo({ width = '100px' }) {
    return <img src="../../public/logo.png" alt="Logo" width={width} />;
}

export default Logo;
