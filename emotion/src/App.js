/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Success from "./components/Success/Success";

const app = css`
  position: relative;
  background-color: #f6f6f6;
  overflow: hidden;
  padding: 24px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 320px;
    background-color: #e37f3e;
    width: 600px;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    transform: rotate(-40deg) translate(-208px, -120px);
  }

  @media (min-width: 768px) {
    padding: 24px 48px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

const appHeader = css`
  @media (min-width: 1024px) {
    flex-shrink: 0;
    flex-basis: 100%;
  }
`;

const footer = css`
  font-size: 14px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    flex-grow: 1;
    margin-left: 48px;
  }

  address {
    font-style: normal;
    margin-bottom: 24px;
  }
`;

const footerTitle = css`
  text-transform: uppercase;
  margin: 0 0 8px;
  font-size: 14px;
`;

function App() {
  return (
    <Router>
      <div css={app}>
        <header css={appHeader}>
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
        <footer css={footer}>
          <h2 css={footerTitle}>headquarters</h2>
          <address>
            500 Sansome St. #200
            <br />
            San Francisco, CA 94111
          </address>
          <h2 css={footerTitle}>phone</h2>
          <address>888.987.8337</address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
