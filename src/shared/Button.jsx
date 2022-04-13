import "./Button.scss";

function TipButton({ className, text, value, setState }) {
  const handleClick = e => {
    setState(parseInt(e.target.value));
  };

  return (
    <>
      <input
        className={className}
        type="radio"
        name="tip-percentage"
        id={text}
        value={value}
        onClick={handleClick}
      />
      <label htmlFor={text}>{value}%</label>
    </>
  );
}
export default TipButton;
