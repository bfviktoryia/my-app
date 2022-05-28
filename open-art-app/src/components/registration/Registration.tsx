import { useState } from "react";
import FormValuesType from "../types/FormValuesType";
import Button from "../ui/Button";
import FormTextField from "../ui/FormTextField";
import "./Registration.scss"

const Registration: React.FC = () => {
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("button clicked");
      };
      const [values, setValues] = useState<FormValuesType>({});

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
                    name="confirm-password"
                    values={values}
                    setValues={setValues}   
                />
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