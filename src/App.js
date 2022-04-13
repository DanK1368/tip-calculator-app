import Title from "./components/Title";
import Container from "./components/Container";
import Bill from "./components/Bill";
import Tips from "./components/Tips";
import NumberOfPeople from "./components/NumberOfPeople";
import Calculation from "./components/Calculation";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (bill > 0 && tip > 0 && numOfPeople > 0) {
      setTipAmount(parseFloat((bill * (tip / 100)) / numOfPeople).toFixed(2));
      setTotal(
        parseFloat(((bill * tip) / 100 + bill) / numOfPeople).toFixed(2)
      );
    }
  }, [bill, tip, numOfPeople, tipAmount, total]);

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
            tipAmount={tipAmount}
            total={total}
            setBill={setBill}
            setTip={setTip}
            setNumOfPeople={setNumOfPeople}
            setTipAmount={setTipAmount}
            setTotal={setTotal}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
