import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Link } from "react-router-dom"
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {
  return (

    <div className="App">
      <div className="navBar d-flex justify-content-center align-items-center">
        <h1>WikiAuthors</h1>
        <div>
          <Link to="/" className="btn btn-primary mx-3">Home</Link>
          <Link to="/authors/create" className="btn btn-primary mx-3">Create an Author</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/authors/create">
          <Create />
        </Route>

        <Route exact path="/authors/update/:_id">
          <Update />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
