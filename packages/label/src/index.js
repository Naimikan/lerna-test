import React from 'react';

const Label = ({ className = '', onClick = () => {}, children }) => (
    <label className={`gz-label ${className}`} onClick={onClick}>{children}</label>
);

export default Label;
