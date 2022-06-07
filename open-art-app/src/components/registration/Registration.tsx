import { useState } from "react";
import { isConfirmedPassword, isValidEmail, isValidName, isValidPassword } from "../../helpers/validfations";
import FormValuesType from "../types/FormValuesType";
import Button from "../ui/Button";
import FormTextField from "../ui/FormTextField";
import "./Registration.scss"

const Registration: React.FC = () => {

    const [values, setInputValues] = useState<FormValuesType>({});
    const [validationError, setValidationError] = useState("");
    const error = validationError;

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        

        const validationError = 
        isValidEmail(values.email) 
        || isValidPassword(values.password)
        || isValidName(values.name)
        || isConfirmedPassword(values.password, values.confirm_password)

        if (validationError){
            setValidationError (validationError);
            return;
        }

      };

        const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
            setInputValues(callback)
            setValidationError("")
        }

    return (
        <form className="form-registration">
            <FormTextField
                    autofocus={true}
                    label={"registration.name"}
                    type="text"
                    name="name"
                    values={values}
                    setValues={setValues}   
                />
            <FormTextField
                    label={"registration.email"}
                    type="email"
                    name="email"
                    values={values}
                    setValues={setValues}   
                />
            <FormTextField
                    label={"registration.password"}
                    type="password"
                    name="password"
                    values={values}
                    setValues={setValues}   
                />
            <FormTextField
                    label={"registration.confirm.password"}
                    type="password"
                    name="confirm_password"
                    values={values}
                    setValues={setValues}   
                />
            {validationError &&
            <div className="form-error">
              {error}      
            </div>}  

            <Button
                color="orange"
                onClick={handleSubmit}
                >
                    {"registration.submit"} 
             </Button>
        </form>
    )
}

export default Registration;