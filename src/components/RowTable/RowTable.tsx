import React from "react";
import { IData } from "../../modals/modals";

export const RowTable = (props: IData): React.JSX.Element => {
  const { date, path } = props;

  return (
    <tr>
      <td>{date}</td>
      <td>{path}</td>
      <td className='row-controll'>
        <div className="controll-editor"></div>
        <div className="controll-delete"></div>
      </td>
    </tr>
  );
}