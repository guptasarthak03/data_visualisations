import React from 'react';
import './styles.css';
import TableRow from '../TableRow';

const TableComponent = ({ columnData, tableHeading }) => {
  const columnList = Object.values(columnData); // transforming object into array based upon object value.
  return (
    <div className='table-container'>
      <table className='data-table'>
        <thead>
          <tr>
            <th className='w-40'>Measure</th>
            {columnList.map((item, index) => (
              <th key={`${item.id}-colHeading`}>Class {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            columnList={columnList}
            rowName='mean'
            rowHeading='Mean'
            tableHeading={tableHeading}
          />
          <TableRow
            columnList={columnList}
            rowName='median'
            rowHeading='Median'
            tableHeading={tableHeading}
          />
          <TableRow
            columnList={columnList}
            rowName='mode'
            rowHeading='Mode'
            tableHeading={tableHeading}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
