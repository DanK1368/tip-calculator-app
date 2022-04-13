import "./Tips.scss";
import Button from "../shared/Button";
import InputField from "../shared/InputField";

function Tips({ setTip }) {
  return (
    <div className="tip-wrapper">
      <fieldset className="button-container">
        <legend>
          <h2>Select Tips %</h2>
        </legend>
        <Button className="button" text="five" value="5" setState={setTip} />
        <Button className="button" text="ten" value="10" setState={setTip} />
        <Button
          className="button"
          text="fifteen"
          value="15"
          setState={setTip}
        />
        <Button
          className="button"
          text="twentyfive"
          value="25"
          setState={setTip}
        />
        <Button className="button" text="fifty" value="50" setState={setTip} />
        <label htmlFor="custom">
          <InputField
            className="custom__tip"
            placeholder="Custom"
            id="custom"
            setState={setTip}
          />
        </label>
      </fieldset>
    </div>
  );
}
export default Tips;
