import React from 'react';

export const data = [
  { id: 1, name: 'Felipe', points: 100, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Fso%2Ffoto-de-perfil&psig=AOvVaw0eY09GeDwKGRHpXc_-GNTm&ust=1676463893728000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDo5-6Alf0CFQAAAAAdAAAAABAE' },
  { id: 2, name: 'Lautaro', points: 200, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Fso%2Ffoto-de-perfil&psig=AOvVaw0eY09GeDwKGRHpXc_-GNTm&ust=1676463893728000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDo5-6Alf0CFQAAAAAdAAAAABAE' },
  { id: 3, name: 'Santiago', points: 300, photoUrl: 'https://example.com/photo3.jpg' },
];

export const Rank = (props) => {
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
                <img src={user.photoUrl} alt={`${user.name}`} />
              </div>
              <span className="user-name">{user.name}</span>
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
