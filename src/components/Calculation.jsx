import "./Calculation.scss";

function Calculation({
  setTip,
  setBill,
  setNumOfPeople,
  tipPerPerson,
  totalPerPerson,
}) {
  const handleReset = e => {
    setTip(0);
    setBill(0);
    setNumOfPeople(0);
  };

  return (
    <div className="calculation">
      <div className="calculation__summary">
        <div className="calculation__container">
          <h2>
            Tip Amount <br /> <span>/ person</span>
          </h2>
          {tipPerPerson === 0 ? (
            <p className="calculation__result">$0.00</p>
          ) : (
            <p className="calculation__result">${tipPerPerson}</p>
          )}
        </div>
        <div className="calculation__container">
          <h2>
            Total <br /> <span>/ person</span>
          </h2>
          {totalPerPerson === 0 ? (
            <p className="calculation__result">$0.00</p>
          ) : (
            <p className="calculation__result">${totalPerPerson}</p>
          )}
        </div>
      </div>
      <button type="reset" className="reset__button" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
export default Calculation;
