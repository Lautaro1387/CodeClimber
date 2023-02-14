import React from 'react';

export const data = [
  { id: 1, name: 'Usuario 1', points: 100, photoUrl: 'https://example.com/photo1.jpg' },
  { id: 2, name: 'Usuario 2', points: 200, photoUrl: 'https://example.com/photo2.jpg' },
  { id: 3, name: 'Usuario 3', points: 300, photoUrl: 'https://example.com/photo3.jpg' },
];

export const Rank = (props) => {
    return (
      <div className="container">
      <table className='table-ranking'>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Friends</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="circle-img">
                  <img src={user.photoUrl} alt={`Foto de ${user.name}`} />
                </div>
                <span>{user.name}</span>
              </td>
              <td>
                <span className="points">{user.points} 300 puntos</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
