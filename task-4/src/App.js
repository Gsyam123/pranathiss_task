// import logo from './logo.svg';
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./Components/Login";

function App() {
  const { loggedIn, username } = useSelector((state) => state);
  console.log(loggedIn);
  return (
    <div className="App">{loggedIn ? <h2>User Logged In</h2> : <Login />}</div>
  );
}

export default App;
