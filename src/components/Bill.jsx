import "./Bill.scss";
import InputField from "../shared/InputField";
import dollarIcon from "../images/icon-dollar.svg";

function Bill({ setBill }) {
  return (
    <div className="bill-wrapper">
      <label htmlFor="bill">Bill</label>
      <InputField
        className="input"
        src={dollarIcon}
        id="bill"
        setState={setBill}
      />
    </div>
  );
}
export default Bill;
