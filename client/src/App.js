import '../src/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/pages/About';
import Navbar from './components/utils/Navbar';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Search from './components/pages/Search';


function App() {
  return (
    <div className="App bg-black text-primary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar isLoggedIn={false} />}>
            <Route index element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
