import styled from 'styled-components';
import BoxBreathingGuide from './components/BoxBreathingGuide';
import { SiGithub } from 'react-icons/si';
import Instructions from './components/Instructions';

const AppContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const RepoLink = styled.a`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
`;

function App() {
  return (
    <AppContainer>
      <RepoLink href="https://github.com/jtaavola/breathe" target="_blank">
        <SiGithub color="black" size="1.5em" title="Repo link" />
      </RepoLink>
      <BoxBreathingGuide>
        <Instructions />
      </BoxBreathingGuide>
    </AppContainer>
  );
}

export default App;
