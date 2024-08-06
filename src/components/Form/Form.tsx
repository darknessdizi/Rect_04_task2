import React from "react";
import { IPropsForm } from "../../modals/modals";
import { Input } from "../Input/Input";

export const Form = (props: IPropsForm): React.JSX.Element => {
  const { date, path, submit, change } = props;

  return (
    <form className='conteiner-form' onSubmit={submit} >
      <Input text='Дата (ДД.ММ.ГГ)' name='date' value={date} onChange={change} />
      <Input text='Пройдено км' name='path' value={path} onChange={change} />
      <button type='submit' className='form-btn' >OK</button>
    </form>
  );
}
