import "./Bill.scss";
import InputField from "../shared/InputField";
import dollarIcon from "../images/icon-dollar.svg";

function Bill({ setBill }) {
  return (
    <div className="bill-wrapper">
      <InputField
        className="input"
        src={dollarIcon}
        id="bill"
        text="Bill"
        setState={setBill}
      />
    </div>
  );
}
export default Bill;
