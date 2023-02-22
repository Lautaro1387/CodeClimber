import React from 'react';
import {data} from './dataRank.js';

export const Rank = () => {
  return (
<div className="img-rank">
  <table className='table-ranking'>
    <thead>
      <tr>
        <th>Global</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user) => (
        <tr key={user.id}>
          <td>
            <div className="user-data">
              <div className="circle-img">
                <img src={user.image} alt={`${user.username}`} />
              </div>
              <span className="user-name">{user.username}</span>
              <span className="user-points">{user.points} puntos</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}
