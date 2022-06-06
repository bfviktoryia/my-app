import { useState } from "react";
import { isValidEmail, isValidPassword } from "../../helpers/validfations";
import FormValuesType from "../types/FormValuesType";
import Button from "../ui/Button";
import FormTextField from "../ui/FormTextField";

import "./Login.scss"


const Login: React.FC = () => {

    const [values, setInputValues] = useState<FormValuesType>({});
    const [validationError, setValidationError] = useState("");
    const error = validationError;


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validationError = isValidEmail(values.email) || isValidPassword(values.password);

        if (validationError){
            setValidationError (validationError);
      }}

      const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
        setInputValues(callback),
        setValidationError("")
      }

        return (
            <form className="form-login"> 
                <FormTextField
                        autofocus={true}
                        label={"login.email"}
                        type="email"
                        name="email"
                        values={values}
                        setValues={setValues}            
                />
                <FormTextField
                        label={"login.password"}
                        type="password"
                        name="password"
                        values={values}
                        setValues={setValues}            
                />
                {error &&
                        <div className="form-error">
                          {error}      
                        </div>
                }  

                <Button
                    color="orange"
                    onClick={handleSubmit}
                    >
                        {"login.submit"}     
                </Button>        
                    
            </form>
        )
}

export default Login;