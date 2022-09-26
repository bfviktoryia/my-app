import React from "react";
import Button from "./Button";

import "./SearchField.scss";

type PropsType = {
    label: string
    placeholder?:string
    type?: string
    value?: string
    setValue: (value: string) => void
}

const SearchField: React.FC<PropsType> = ({
        label,
        placeholder,
        type="text",
        value,
        setValue,
    }) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        }


    return (
        <div className="search-field-container">
            <label className="search-field-label" htmlFor="search-field-input">
                {label}
            </label>
            <input 
                className="search-field-input"
                placeholder={placeholder}
                value={value || ""}
                onChange={handleChange}
                type={type}
            />
        </div>
    )
}

export default SearchField;