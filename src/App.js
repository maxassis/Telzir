import * as S from "./styles";
import GlobalStyles from "./styles/global";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.ImageWrapper>
          <h1>Telzir</h1>
        </S.ImageWrapper>
        <Content />
      </S.Wrapper>
    </>
  );
}

export default App;
