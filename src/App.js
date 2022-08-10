import styled from 'styled-components';
import BoxBreathingGuide from './components/BoxBreathingGuide';

const AppContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <BoxBreathingGuide />
    </AppContainer>
  );
}

export default App;
