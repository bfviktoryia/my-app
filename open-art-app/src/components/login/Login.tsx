import { useState } from "react";
import { isValidEmail, isValidPassword } from "../../helpers/validfations";
import useTranslate from "../hooks/useTranslate";
import FormValuesType from "../types/FormValuesType";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormTextField from "../ui/FormTextField";

import "./Login.scss"

const Login: React.FC = () => {

    const { t } = useTranslate();
    const [values, setInputValues] = useState<FormValuesType>({});
    const [validationError, setValidationError] = useState("");

    const error = validationError;

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validationError = isValidEmail(values.email) || isValidPassword(values.password);

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
        <Form header={t("login.header")}> 
            <FormTextField
                    autofocus={true}
                    label={t("login.email")}
                    type="email"
                    name="email"
                    values={values}
                    setValues={setValues}            
            />
            <FormTextField
                    label={t("login.password")}
                    type="password"
                    name="password"
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
                    {t("login.submit")}     
            </Button>        
                
        </Form>
    )
}


export default Login;