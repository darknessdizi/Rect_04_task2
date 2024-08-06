import React from "react";
import { IPropsInput } from "../../modals/modals";

export const Input = (props: IPropsInput): React.JSX.Element => {
  const { name, text, value, onChange, pattern } = props;

  return (
    <label className='form-label'>
      <span>{text}</span>
      <input 
        type="text" 
        className='label-input' 
        name={name}
        value={value} 
        onChange={onChange}
        required
        pattern={pattern}
      />
    </label>
  );
}
