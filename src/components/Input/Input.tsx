import { IPropsInput } from "../../modals/modals";

export const Input = (props: IPropsInput) => {
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
        placeholder = {(name === "path") ? "5.8" : ""}
      />
    </label>
  );
}
