import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import './App.css';
import Landing from './Landing/Landing';

function App() {
  return (
    <div className="app">
      <div className="app__block">
        <Header />
        <Landing />
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
