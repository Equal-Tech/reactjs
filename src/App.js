import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Library from "./components/Library/Library";
import ItemPage from "./components/ItemPage/ItemPage";
import GetLibraries from "./hooks/getLibraries";

function App() {
  const [user, setUser] = useState("User");
  const { libraries, isLoading, error } = GetLibraries();

  return (
    <Router>
      <div className="App">
        {/* the divs with styling are optional to make it look nicer */}
        <nav className="flex">
          <div className="flex link-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact us</Link>
          </div>

          <div className="flex nav-profile">
            <p>Hello, {user}!</p>
            <button onClick={() => setUser("Grant")}>Login</button>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <header className="App-header">
              <h1>React Library Store</h1>
            </header>
            <main>
              {isLoading && <p>Loading...</p>}
              {error && <p> {error} </p>}
              {libraries &&
                libraries.map((library) => {
                  return (
                    <Library
                      key={library.id}
                      name={library.name}
                      id={library.id}
                      items={library.items}
                    />
                  );
                })}
            </main>
            <footer></footer>
          </Route>
          <Route path="/about">
            <header className="App-header">
              <h1>About</h1>
            </header>
            <main>
              <p>About us page</p>
            </main>
            <footer></footer>
          </Route>
          <Route path="/contact-us">
            <header className="App-header">
              <h1>Contact</h1>
            </header>
            <main>
              <p>Contact us page</p>
            </main>
            <footer></footer>
          </Route>
          <Route path="/library/:libraryId/item/:id">
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
