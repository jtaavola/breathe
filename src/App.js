import styled from 'styled-components';
import BoxBreathingGuide from './components/BoxBreathingGuide';
import { SiGithub } from 'react-icons/si';
import Instructions from './components/Instructions';
import { useState } from 'react';

const AppContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // use small viewport height if browser supported
  min-height: 100svh;
`;

const RepoLink = styled.a`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
`;

function App() {
  const [animationId, setAnimationId] = useState(null);

  return (
    <AppContainer>
      <RepoLink href="https://github.com/jtaavola/breathe" target="_blank">
        <SiGithub color="black" size="1.5em" title="Repo link" />
      </RepoLink>
      <BoxBreathingGuide onRestart={setAnimationId}>
        <Instructions animationId={animationId} />
      </BoxBreathingGuide>
    </AppContainer>
  );
}

export default App;
