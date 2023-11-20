import React from 'react';

function TableRow({ columnList, rowName, rowHeading, tableHeading }) {
  return (
    <>
      <tr>
        <td>{tableHeading} {rowHeading}</td>
        {columnList.map(item => (
          <td key={`${item.id}-${rowName}`}>{item[rowName]}</td>
        ))}
      </tr>
    </>
  );
}

export default TableRow;
