import "./Calculation.scss";
import Button from "../shared/Button";

function Calculation({
  tip,
  bill,
  numOfPeople,
  tipAmount,
  total,
  setTip,
  setBill,
  setNumOfPeople,
  setTipAmount,
  setTotal,
}) {
  const handleReset = () => {
    setTip(0);
    setBill(0);
    setNumOfPeople(0);
    setTipAmount(0);
    setTotal(0);
  };

  console.log(tip, bill, numOfPeople);
  return (
    <div className="calculation">
      <div className="calculation__container">
        <h3>
          Tip Amount <br /> <span>/ person</span>
        </h3>
        {tipAmount === null ? (
          <p className="calculation__result">$0.00</p>
        ) : (
          <p className="calculation__result">${tipAmount}</p>
        )}
      </div>
      <div className="calculation__container">
        <h3>
          Total <br /> <span>/ person</span>
        </h3>
        {tipAmount === null ? (
          <p className="calculation__result">$0.00</p>
        ) : (
          <p className="calculation__result">${total}</p>
        )}
      </div>
      <button type="button" className="reset__button" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
export default Calculation;
