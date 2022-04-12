import "./Tips.scss";
import Button from "../shared/Button";
import InputField from "../shared/InputField";

function Tips({ setTip }) {
  return (
    <div className="tip-wrapper">
      <h2>Select Tips %</h2>
      <div className="button-container">
        <Button className="button" text="5%" value="5" setState={setTip} />
        <Button className="button" text="10%" value="10" setState={setTip} />
        <Button className="button" text="15%" value="15" setState={setTip} />
        <Button className="button" text="25%" value="25" setState={setTip} />
        <Button className="button" text="50%" value="50" setState={setTip} />
        <InputField
          className="custom__tip"
          placeholder="Custom"
          id="custom"
          setState={setTip}
        />
      </div>
    </div>
  );
}
export default Tips;
