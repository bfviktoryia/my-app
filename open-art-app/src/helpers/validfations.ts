
export const isValidEmail = (value: string): string => {
return !value.match(/^\w+@\w+\.\w+$/) ? "Email is not valid. Try again" : "";
}

export const isValidPassword = (value: string): string => {
return !value.match(/^[a-zA-Z0-9]{6,12}$/) ? "Password is not valid. Try again or reset password" : "";
}

export const isValidName = (value: string): string => {
        if(!value){
            return "Name is missing"
        }else if(value.length < 3){
            return "Name is too short"
        }else{
            return ""
        }
    }

export const isConfirmedPassword = (value: string, _value: string): string => {
    return value !== _value ? "Password is not confirmed" : "";
}

