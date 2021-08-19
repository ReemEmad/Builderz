import "./App.css"
import Home from "./components/Home"
import AppNavbar from "./components/Navbar"
import Signup from "./components/Signup"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/">
        <AppNavbar />
        <Home />
      </Route>
    </Switch>
  )
}

export default App
