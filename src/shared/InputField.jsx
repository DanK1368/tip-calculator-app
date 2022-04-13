import "./InputField.scss";

function InputField({ className, placeholder, src, id, text, setState }) {
  const handleChange = e => {
    setState(parseFloat(e.target.value));
  };

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        className={className}
        type="number"
        placeholder={placeholder}
        id={id}
        inputMode="numeric"
        onChange={handleChange}
      />
      <img className="icon" src={src} alt="" />
    </>
  );
}
export default InputField;
