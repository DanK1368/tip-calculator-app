import Title from "./components/Title";
import Container from "./components/Container";
import Bill from "./components/Bill";
import Tips from "./components/Tips";
import NumberOfPeople from "./components/NumberOfPeople";
import Calculation from "./components/Calculation";

function App() {
  return (
    <>
      <Title />
      <Container children>
        <Bill />
        <Tips />
        <NumberOfPeople />
        <Calculation />
      </Container>
    </>
  );
}

export default App;
