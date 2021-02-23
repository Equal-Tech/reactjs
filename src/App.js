import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Library from "./components/Library/Library";
import ItemPage from "./components/ItemPage/ItemPage";
import { getLibraries } from "./services/libraryServices";

function App() {
  const libraries = getLibraries();
  // let x = 10;
  const [x, setX] = useState(10);
  const [user, setUser] = useState("User");

  useEffect(() => {
    document.title = `Your count ${x}`;
  }, [x]);

  return (
    <Router>
      <div className="App">
        {/* OPTIONALLY REMOVE THIS CODE!!! */}
        {/* <p>{x}</p>
        <button
          onClick={() => {
            x += 5;
            console.log("Setting x to: ", x);
          }}
        >
          Add 5
        </button> */}

        <p>{x}</p>
        <button
          onClick={() => {
            setX(x + 5);
            console.log("Setting x to: ", x);
          }}
        >
          Add 5
        </button>

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
              {libraries.map((library) => {
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
