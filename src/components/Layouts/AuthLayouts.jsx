import { Link } from "react-router-dom";
import {useContext} from "react";
import {DarkMode} from "../../context/DarkMode.jsx";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
      </button>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl  font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please Enter Your Details
        </p>
        {children}
        <FooterLogin type={type} />
      </div>
    </div>
  );
};

const FooterLogin = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't Have an account?{" "}
        <Link to="/register" className="font-bold text-blue">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already Have an account?{" "}
        <Link to="/login" className="font-bold text-blue">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
