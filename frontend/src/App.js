import styled from "styled-components";
import {MainLayout} from "./styles/Layout"
import Navigation from "./Components/Navigation/Navigation"

function App() {

  return (
    <AppStyled className="App">
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
`;

export default App;
