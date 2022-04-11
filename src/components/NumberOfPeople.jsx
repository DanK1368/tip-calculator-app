import "./NumberOfPeople.scss";
import InputField from "../shared/InputField";
import personIcon from "../images/icon-person.svg";

function NumberOfPeople() {
  return (
    <div className="people-wrapper">
      <h2>Number of People</h2>
      <InputField className="input" src={personIcon} />
    </div>
  );
}
export default NumberOfPeople;
