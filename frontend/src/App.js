import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './components/Card';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import SearchResult from './components/SearchResult/SearchResult';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
