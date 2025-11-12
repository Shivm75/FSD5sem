import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Body />}></Route>
        </Routes>
      </Router>
      <Footer />

    </div>
  )
}

export default App