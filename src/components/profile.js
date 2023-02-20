import React from 'react';


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
              document.querySelector('img-profile').src = imagen;
            };
            reader.readAsDataURL(file);
          };
          input.click();
        };
      
        return (
             <div className="profile-box">
                <img src={require('../images/default.png')} alt="Foto de perfil" className='img-profile' onClick={handleFotoClick} />
                <p className='name-profile'>Lautaro Illa</p>
                <div className="medallas">
                    <div className="medalla"></div>
                    <div className="medalla"></div>
                    <div className="medalla"></div>
                    <div className="medalla"></div>
                </div>          
            </div>
        );
      }

  