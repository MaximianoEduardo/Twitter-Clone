import React from 'react'
import StickyBox from 'react-sticky-box'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import List from '../List'
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder='Buscar no Twitter' />
            <SearchIcon />
        </SearchWrapper>
        <StickyBox>
            <Body>
                <List  
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion name='Guilherme Rodz'
                            nickname='@guilherme_rodz'
                        />,
                        <FollowSuggestion name='NBA'
                        nickname='@nba'
                        />,
                        <FollowSuggestion name='Riot Games'
                        nickname='@riotgames'
                        />,
                    ]}
                />
                <List  
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
            </Body>
        </StickyBox>
        
    </Container>
  );
};

export default Sidebar;
