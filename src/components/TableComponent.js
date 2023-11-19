import React from 'react';
import './TableComponent.css';

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
          <tr>
            <td>{tableHeading} Mean</td>
            {columnList.map((item, index) => (
              <td key={`${item.id}-mean`}>{item.mean}</td>
            ))}
          </tr>
          <tr>
            <td>{tableHeading} Median</td>
            {columnList.map((item, index) => (
              <td key={`${item.id}-median`}>{item.median}</td>
            ))}
          </tr>
          <tr>
            <td>{tableHeading} Mode</td>
            {columnList.map((item, index) => (
              <td key={`${item.id}-mode`}>{item.mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
