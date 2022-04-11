import "./InputField.scss";

function InputField({ className, placeholder, src }) {
  return (
    <>
      <label htmlFor="bill-amount">
        <input
          className={className}
          type="text"
          placeholder={placeholder}
          id="bill-amount"
        />
        <img className="icon" src={src} alt="" />
      </label>
    </>
  );
}
export default InputField;
