import CssBaseline from "@material-ui/core/CssBaseline";
import Content from "./components/Content";
import Header from "./components/Header";
import * as S from "./styles";

function App() {
  return (
    <>
      <CssBaseline />
      <S.Wrapper>
        <Header />
        <Content />
      </S.Wrapper>
    </>
  );
}

export default App;
