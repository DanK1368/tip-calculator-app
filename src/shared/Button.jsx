import "./Button.scss";

function TipButton({ className, text, value, setState }) {
  const handleClick = e => {
    e.preventDefault();
    setState(parseInt(e.target.value));
    console.log(setState);
  };

  return (
    <button required className={className} value={value} onClick={handleClick}>
      {text}
    </button>
  );
}
export default TipButton;
