import "./Calculation.scss";
import Button from "../shared/Button";

function Calculation() {
  return (
    <div className="calculation">
      <div className="calculation__container">
        <h3>
          Tip Amount <br /> <span>/ person</span>
        </h3>
        <p className="calculation__result">$5.00</p>
      </div>
      <div className="calculation__container">
        <h3>
          Total <br /> <span>/ person</span>
        </h3>
        <p className="calculation__result">$4.27</p>
      </div>
      <Button className="reset__button" text="RESET" />
    </div>
  );
}
export default Calculation;
