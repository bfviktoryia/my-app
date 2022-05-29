import React, { useEffect, useRef } from "react";
import FormValuesType from "../types/FormValuesType";

import "./FormTextField.scss";

type PropsType = {
    autofocus?: boolean
    label: string
    type?: string
    name: string
    values: FormValuesType
    setValues: (callback: (prevValue: FormValuesType) => FormValuesType) => void
}

const FormTextField: React.FC<PropsType> = ({
        autofocus,
        name,
        type="text",
        label,
        values,
        setValues,
    }) => {

        const nameRef = useRef<HTMLInputElement>(null);
    
        useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
        }, []);

        const setValue = (value: string) => {
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        }

    return (       
        <div className="input-field-container">
                <div className="input-field-label">
                    {label}
                </div>
                <input 
                    className="input-field"
                    ref={nameRef}
                    value={values[name]}
                    onChange={handleChange}
                    type={type}
                />
        </div>

    )
}

export default FormTextField;