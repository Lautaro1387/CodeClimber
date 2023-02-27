import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const Profile = () => {

  const handleFotoClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imagen = event.target.result;
        document.querySelector('.img-profile').src = imagen;
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const { username, points } = useContext(AuthContext);

  return (
    <div className="profile-container">
        <div className="profile-box">
      <img src={require('../images/default.png')} alt="Foto de perfil" className='img-profile' onClick={handleFotoClick} />
          <br></br>
          <p className='name-profile'>{username}</p>
          <p className='score-profile'>{points}</p>
          <div className="medallas">
          <img src={require('../images/medalls.png')} alt="Medalla 3" className="medalla" />
          <img src={require('../images/medalls.png')} alt="Medalla 1" className="medalla" />
          <img src={require('../images/medalls.png')} alt="Medalla 2" className="medalla" />
          <img src={require('../images/medalls.png')} alt="Medalla 4" className="medalla" />
          </div>          
      </div>
  </div>
  );
}

  