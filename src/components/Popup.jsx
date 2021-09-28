import React from 'react';
import './Popup.css'

const Popup = ({text}) => {
    return (
        <div className="popup_wrapper">
            {text}
        </div>
    )
}

export default Popup;
