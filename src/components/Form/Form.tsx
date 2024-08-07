import { IPropsForm } from "../../modals/modals";
import { Input } from "../Input/Input";

export const Form = (props: IPropsForm): React.JSX.Element => {
  const { date, path, submit, change } = props;

  return (
    <form className='conteiner-form' onSubmit={submit} >
      <Input text='Дата (ДД.ММ.ГГ)' name='date' value={date} onChange={change} pattern='(?:0?[1-9]|[12][0-9]|3[01])\.(?:0?[1-9]|1[0-2])\.\d{2}' />
      <Input text='Пройдено км' name='path' value={path} onChange={change} pattern='\d+(\.\d+)?' />
      <button type='submit' className='form-btn' >OK</button>
    </form>
  );
}
