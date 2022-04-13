import "./InputField.scss";

function InputField({ className, placeholder, src, id, setState }) {
  const handleChange = e => {
    setState(parseFloat(e.target.value));
  };

  return (
    <>
      <input
        className={className}
        type="number"
        placeholder={placeholder}
        id={id}
        inputMode="decimal"
        onChange={handleChange}
      />
      <img className="icon" src={src} alt="" />
    </>
  );
}
export default InputField;
