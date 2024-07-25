import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart2 from './components/stickyNav/cart/Cart2';


function App() {
  return (<>
  <div class="bg-darkk">
    
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart2 />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  </div>
  </>
  );
}

export default App;
