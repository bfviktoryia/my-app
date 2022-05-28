import { useState } from "react";
import FormValuesType from "../types/FormValuesType";
import Button from "../ui/Button";
import FormTextField from "../ui/FormTextField";

import "./Login.scss"


const Login: React.FC = () => {

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("button clicked");
      };
      const [values, setValues] = useState<FormValuesType>({});


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