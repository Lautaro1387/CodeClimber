import React from 'react';

export const data = [
  { id: 1, name: 'Usuario 1', points: 100, photoUrl: '../images/lau.jpg' },
  { id: 2, name: 'Usuario 2', points: 200, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Fso%2Ffoto-de-perfil&psig=AOvVaw0eY09GeDwKGRHpXc_-GNTm&ust=1676463893728000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDo5-6Alf0CFQAAAAAdAAAAABAE' },
  { id: 3, name: 'Usuario 3', points: 300, photoUrl: 'https://example.com/photo3.jpg' },
];

export const Rank = (props) => {
  return (
    <div className="container-table">
      <table className='table-ranking'>
        <thead>
          <tr>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="circle-img">
                  <img src={user.photoUrl} alt={`${user.name}`} />
                </div>
                <span>{user.name}</span>
              </td>
              <td>
                <span className="points">{user.points} puntos</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
