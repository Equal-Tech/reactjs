import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Library from "./components/Library/Library";
import ItemPage from "./components/ItemPage/ItemPage";

function App() {
  const [libraries, setLibraries] = useState();
  const [user, setUser] = useState("User");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://601598ce55dfbd00174ca670.mockapi.io/libraries")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setLibraries(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error has occured: ${error}`);
        setIsLoading(false);
      });
  }, []);

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
          <Route path="/item/:id">
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
