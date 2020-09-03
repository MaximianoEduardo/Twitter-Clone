import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
          <Avatar/>
      </Banner>
      <ProfileData>
          {/* <EditButton outlined>
                Editar Perfil
          </EditButton> */}
          <h1>Eduardo Maximiano</h1>
          <h2>@edmaxi</h2>

          <p>FrontEnd Developer  <a href="https://github.com/MaximianoEduardo">Github</a> </p>

          <ul>
              <li>
                  <LocationIcon />
                  Sao Paulo, Brazil
              </li>
              <li>
                  <CakeIcon />
                  Nascido(a) em 16 de setembro de 1998
              </li>
          </ul>

        <Followage>
            <span>
                seguindo <strong>150</strong>
            </span>
            <span>
                <strong>15 </strong> seguidores
            </span>
        </Followage>

      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
