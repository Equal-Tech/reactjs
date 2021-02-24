import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Library from "./components/Library/Library";
import ItemPage from "./components/ItemPage/ItemPage";
import UseLibraries from "./hooks/useLibraries";
import LibraryForm from "./components/LibraryForm/LibraryForm";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage";

function App() {
  const { libraries, error, isLoading } = UseLibraries();
  const [user, setUser] = useState("User");

  return (
    <Router>
      <div className="App">
        <nav className="flex">
          <div className="flex link-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/feedback">Feedback</Link>
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
              <h2>Add a New Library</h2>
              <LibraryForm />
              {isLoading && <p>Loading...</p>}
              {error && <p> {error} </p>}
              {libraries &&
                libraries.map((library) => {
                  return (
                    <Library
                      items={library.items}
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
              <ContactUsForm />
            </main>
            <footer></footer>
          </Route>
          <Route path="/library/:libraryId/item/:id">
            <ItemPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
