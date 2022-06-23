import './App2.css';
//import Books from './components/Books';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

/*
const books = [
  {
      id: 12345,
      title: "1984"
  },
  {
      id: 23456,
      title: "Brave New World"
  },
  {
      id: 34567,
      title: "Lunar Park"
  }
] */

function App() {
  return (
    <div className="App bg-black text-primary">
      <Navbar />
      <Login />
      <hr /> <hr />
      <Register />
      <hr /> <hr />
      <About />
    </div>
  );
}

export default App;
