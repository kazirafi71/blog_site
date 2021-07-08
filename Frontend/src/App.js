import "./App.css";
import HomeComp from "./Components/HomeComp/HomeComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBlog from "./Pages/AddBlog";
import Signup from "./Pages/Signup";
import UpdateBlog from "./Pages/UpdateBlog";
import Login from "./Pages/Login";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/add-blog">
            <AddBlog />
          </Route>
          <Route exact path="/update-blog">
            <UpdateBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
