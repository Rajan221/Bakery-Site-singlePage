import "./App.css";
import Home from "./Screens/Home/home";
import Navbar from "./Screens/Navbar";
import Story from "./Screens/Our Story/Story";
import Bakery from "./Screens/The Bakery/Bakery";
import Products from "./Screens/Our Products/Products";
import Where from "./Screens/Where/Where";
import Online from "./Screens/Online/Online";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/story" element={<Story />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/where" element={<Where />} />
          <Route path="/online" element={<Online />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Test() {
  return <div>hello test page</div>;
}
