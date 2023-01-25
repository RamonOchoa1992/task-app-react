import React from 'react';
import "./Modal.css"

const Modal = ({ children, backColor }) => {
    return (
        <article className="modal">
            <div className="modal-container" style={{ backgroundColor: backColor }}>
                {children}
            </div>
        </article>
    )
}

export default Modal