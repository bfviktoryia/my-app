import React from "react";

import "./SearchField.scss";

type PropsType = {
    label: string
    type?: string
    value?: string
    setValue: (value: string) => void
}

const SearchField: React.FC<PropsType> = ({
        label,
        type="text",
        value,
        setValue
    }) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="search-field-container">
            <div className="search-field-label">
                {label}
            </div>
            <input 
                className="search-field-input"
                value={value || ""}
                onChange={handleChange}
                type={type}
            />
        </div>
    )
}

export default SearchField;