import Title from "./components/Title";
import Container from "./components/Container";
import Bill from "./components/Bill";
import Tips from "./components/Tips";
import NumberOfPeople from "./components/NumberOfPeople";
import Calculation from "./components/Calculation";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(null);

  let tipPerPerson = 0;
  let totalPerPerson = 0;

  if (bill > 0 && tip >= 0 && numOfPeople > 0) {
    tipPerPerson = parseFloat((bill * (tip / 100)) / numOfPeople).toFixed(2);
    totalPerPerson = parseFloat(
      ((bill * tip) / 100 + bill) / numOfPeople
    ).toFixed(2);
    console.log(tipPerPerson, totalPerPerson);
  }

  return (
    <>
      <Title />
      <main>
        <Container children>
          <Bill setBill={setBill} />
          <Tips setTip={setTip} />
          <NumberOfPeople setNumOfPeople={setNumOfPeople} />
          <Calculation
            tip={tip}
            bill={bill}
            numOfPeople={numOfPeople}
            setBill={setBill}
            setTip={setTip}
            setNumOfPeople={setNumOfPeople}
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
