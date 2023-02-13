import React from 'react';

export const Rank = (props) => {
    return (
        <table className='table-ranking'>
        <thead>
          <tr>
            <th>Global</th>
            <th>Friends</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((row, index) => (
            <tr key={index}>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
            </tr>
            ))}
        </tbody>
      </table>
    )
}
