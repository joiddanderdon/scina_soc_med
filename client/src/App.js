//import './App.css';
//import './style1.css';
import Books from './components/Books';

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
]

function App() {
  return (
    <div className="App">
      Hello Wally!
      <Books books={books} />
    </div>
  );
}

export default App;
