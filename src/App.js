import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Deposit from "./pages/deposit";
import Withdraw from "./pages/withdraw";

import "./App.css";

/* to make global state management for two-three routes at a time, we use redux */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <Link to="/" className="App-link">
                Home
              </Link>
            </li>
            <li className="li-style">
              <Link to="/deposit" className="App-link">
                Deposit
              </Link>
            </li>
            <li className="li-style">
              <Link to="/withdraw" className="App-link">
                Withdraw
              </Link>
            </li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/deposit" exact component={Deposit} />
          <Route path="/withdraw" exact component={Withdraw} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
