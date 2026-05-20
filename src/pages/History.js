import React from 'react';

function History() {
  const records = [
    {
      month: 'January',
      units: 120,
      bill: 600,
    },
    {
      month: 'February',
      units: 140,
      bill: 700,
    },
    {
      month: 'March',
      units: 180,
      bill: 900,
    },
  ];

  return (
    <div className='page'>
      <h1>Bill History</h1>

      <table>
        <thead>
          <tr>
            <th>Month</th>
             <th>Units</th>
            <th>Bill Amount</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.month}</td>
              <td>{record.units}</td>
              <td>₹ {record.bill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;