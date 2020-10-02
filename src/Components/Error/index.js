
import React from 'react';
import './Styles.css'

const Error = ({message}) => {

    return (
        <div className="alert alert-dismissible alert-danger">
            <button type="button" className="close" data-dismiss="alert"></button>
            <strong>{message}</strong>
        </div>

    );
}

export default Error;