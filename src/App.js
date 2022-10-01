import styled from 'styled-components';
import BoxBreathingGuide from './components/BoxBreathingGuide';
import { SiGithub } from 'react-icons/si';

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
        <SiGithub size="1.5rem" title="Repo link" />
      </RepoLink>
      <BoxBreathingGuide />
    </AppContainer>
  );
}

export default App;
