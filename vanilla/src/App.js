import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-header">Let's connect</h1>
        <p className="page-subtitle">Who are you looking to connect with?</p>
      </header>
      <main className="content-wrapper">
        <Form />
      </main>
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
  );
}

export default App;
