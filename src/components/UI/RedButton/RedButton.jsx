import React from 'react';
import classes from './RedButton.module.css'

const RedButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.RedButton}>
            {children}
        </button>
    );
};

export default RedButton;