import { IPropsTable } from "../../modals/modals";
import { RowTable } from '../RowTable/RowTable';

export const Table = (props: IPropsTable): React.JSX.Element => {
  const { array } = props;

  return (
    <div className='conteiner-table'>
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
            array.map((obj, index) => {
              return <RowTable date={obj.date} path={obj.path} key={index} />
            })
          }   
        </tbody>
          
      </table>
    </div>
  );
}