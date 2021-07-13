import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Success from "./components/Success/Success";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="page-header">Let's connect</h1>
          <p className="page-subtitle">Who are you looking to connect with?</p>
        </header>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/other">
            <h2>
              honestly I don't even want to be bothered trying to style this.
            </h2>
          </Route>
        </Switch>
        <footer className="App-footer">
          <h2 className="footer-title">headquarters</h2>
          <address>
            500 Sansome St. #200
            <br />
            San Francisco, CA 94111
          </address>
          <h2 className="footer-title">phone</h2>
          <address>888.987.8337</address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
