import "./App.css"
import Home from "./components/Home"
import AppNavbar from "./components/Navbar"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Home />
      {/* <Signup /> */}
    </div>
  )
}

export default App
