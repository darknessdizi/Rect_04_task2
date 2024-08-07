import { IPropsTable } from "../../modals/modals";
import { RowTable } from '../RowTable/RowTable';
import { v4 as uuidv4 } from 'uuid';

export const Table = (props: IPropsTable): React.JSX.Element => {
  const { array, click } = props;

  return (
    <div className='conteiner-table' onClick={click}>
      <table className='table'>
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
          
        <tbody>
          {
            array.map((obj) => {
              return <RowTable date={obj.date} path={obj.path} key={uuidv4()} />
            })
          }   
        </tbody>
        
      </table>
    </div>
  );
}