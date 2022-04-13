import "./Title.scss";
import logo from "../images/logo.svg";

function Title() {
  return (
    <header role="banner">
      <h1>
        <img src={logo} alt="this is the tip calculator company logo" />
      </h1>
    </header>
  );
}
export default Title;
