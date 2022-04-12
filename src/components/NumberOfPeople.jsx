import "./NumberOfPeople.scss";
import InputField from "../shared/InputField";
import personIcon from "../images/icon-person.svg";

function NumberOfPeople({ setNumOfPeople }) {
  return (
    <div className="people-wrapper">
      <InputField
        className="input"
        src={personIcon}
        id="people"
        text="Number of People"
        setState={setNumOfPeople}
      />
    </div>
  );
}
export default NumberOfPeople;
