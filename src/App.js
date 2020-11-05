import { Router } from "@reach/router";
import "./App.css";
import Translation from "./components/container/Translation";
import { Navbar, NavItem } from "./components/navigation/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <NavItem title="Try App" href="/" />
          <NavItem title="Nav Item 2" href="#" />
          <NavItem title="Nav Item 3" href="#" />
          <NavItem title="Nav Item 4" href="#" />
          <NavItem title="Nav Item 5" href="#" />
        </Navbar>
      </header>
      <Router className="App-content">
        <Translation path="/" />
      </Router>
    </div>
  );
}

export default App;
