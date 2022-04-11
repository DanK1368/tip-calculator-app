import "./Bill.scss";
import InputField from "../shared/InputField";
import dollarIcon from "../images/icon-dollar.svg";

function Bill() {
  return (
    <div className="bill-wrapper">
      <h2>Bill</h2>
      <InputField className="input" src={dollarIcon} />
    </div>
  );
}
export default Bill;
