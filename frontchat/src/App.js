import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
