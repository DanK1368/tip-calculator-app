import "./InputField.scss";

function InputField({ className, placeholder, src, id, text, setState }) {
  const handleChange = e => {
    setState(parseInt(e.target.value));
    console.log(setState);
  };

  return (
    <>
      <label htmlFor={id}>
        <h2>{text}</h2>
        <input
          className={className}
          type="number"
          placeholder={placeholder}
          id={id}
          inputMode="numeric"
          onChange={handleChange}
        />
        <img className="icon" src={src} alt="" />
      </label>
    </>
  );
}
export default InputField;
