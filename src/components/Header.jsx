import { Link } from "react-router-dom";

const Header = ({ text }) => {
  // const navigater = useNavigate();

  // const handleNavigate = () => {
  //   navigater("/");
  // };

  return (
    <div className="header">
      {/* <button type="button" className="header-title" onClick={handleNavigate}>
        {text}
      </button> */}
      <Link to="/" className="header-title">
        {text}
      </Link>
    </div>
  );
};

export default Header;
