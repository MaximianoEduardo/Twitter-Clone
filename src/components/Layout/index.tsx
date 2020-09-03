import React from 'react'
import { Container, Wrapper } from './styles'
import Main from '../Main'
import MenuBar from '../MenuBar'
import Sidebar from '../Sidebar';

const Layout: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <MenuBar />
            <Main />
            <Sidebar />
        </Wrapper>
    </Container>
  );
};

export default Layout;
