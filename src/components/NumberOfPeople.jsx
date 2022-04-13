import "./NumberOfPeople.scss";
import InputField from "../shared/InputField";
import personIcon from "../images/icon-person.svg";

function NumberOfPeople({ setNumOfPeople }) {
  return (
    <div className="people-wrapper">
      <label htmlFor="people">Number of People</label>
      <InputField
        className="input"
        src={personIcon}
        id="people"
        setState={setNumOfPeople}
      />
    </div>
  );
}
export default NumberOfPeople;
