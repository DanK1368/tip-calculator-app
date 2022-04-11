import "./Tips.scss";
import Button from "../shared/Button";
import InputField from "../shared/InputField";

function Tips() {
  return (
    <div className="tip-wrapper">
      <h2>Select Tips %</h2>
      <div className="button-container">
        <Button className="button" text="5%" />
        <Button className="button" text="10%" />
        <Button className="button" text="15%" />
        <Button className="button" text="25%" />
        <Button className="button" text="50%" />
        <InputField className="custom__tip" placeholder="Custom" />
      </div>
    </div>
  );
}
export default Tips;
