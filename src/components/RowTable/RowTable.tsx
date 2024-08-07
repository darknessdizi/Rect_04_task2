import { IData } from "../../modals/modals";

export const RowTable = (props: IData): React.JSX.Element => {
  const { date, path } = props;

  return (
    <tr className="table-item">
      <td className="item-date">{date}</td>
      <td>{path}</td>
      <td className='row-controll'>
        <div className="controll-editor"></div>
        <div className="controll-delete"></div>
      </td>
    </tr>
  );
}