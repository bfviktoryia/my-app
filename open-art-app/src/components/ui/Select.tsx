import React from "react";

import "./TextField.scss";

type PropsType = {
    value: string,
    children?: React.ReactNode,
    setValue: (value: string) => void
}

const Select: React.FC<PropsType> = ({
        value,
        children,
        setValue
    }) => {

        const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setValue(event.target.value);
        }

        return (
<div>
          <label htmlFor="select-change-limit">Limit</label>
          <select className="select-change-limit" id="select-change-limit"
              value={value}
              onChange={handleChange}
          >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
          </select>
</div>
        )
    
    }

    export default Select;