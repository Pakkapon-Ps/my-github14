import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import Main from './pages/Main';
import Cardmenu from './pages/Cardmenu';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Main />
      <Cardmenu />
      <Footer />
    </div>
  );
}

export default App;
