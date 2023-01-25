import React from 'react';

const CheckBox = ({ setChecked }) => {
    return (
        <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}

export default CheckBox;