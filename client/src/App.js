import '../src/App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Register from './components/Register';


function App() {
  return (
    <div className="App bg-black text-primary">
      <Navbar />
      <hr /> <hr />
      <Register />
      <hr /> <hr />
 
      <About />
    </div>
  );
}

export default App;
